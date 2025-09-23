// hooks/useProducts.js
import { useState, useEffect } from 'react';

const STRAPI_API = import.meta.env.VITE_STRAPI_URL;


export const useProducts = (options = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  const {
    page = 1,
    limit = 10,
    category = '',
    search = '',
    minPrice = 0,
    maxPrice = Infinity,
    inStock = null,
    sortBy = 'name',
    sortOrder = 'asc',
    autoFetch = true
  } = options;

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Build query parameters
      const params = new URLSearchParams();

      if (page) params.append('page', page);
      if (limit) params.append('limit', limit);
      if (category) params.append('category', category);
      if (search) params.append('search', search);
      if (minPrice > 0) params.append('minPrice', minPrice);
      if (maxPrice < Infinity) params.append('maxPrice', maxPrice);
      if (inStock !== null) params.append('inStock', inStock);
      if (sortBy) params.append('sortBy', sortBy);
      if (sortOrder) params.append('sortOrder', sortOrder);

      // const queryString = params.toString();
      const url = STRAPI_API + `/api/products?populate=*`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any authentication headers if needed
          // 'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Handle different API response structures
      if (Array.isArray(data)) {
        setProducts(data);
        setTotalCount(data.length);
      } else if (data.products && Array.isArray(data.products)) {
        setProducts(data.products);
        setTotalCount(data.total || data.count || data.products.length);
      } else if (data.data && Array.isArray(data.data)) {
        setProducts(data.data);
        setTotalCount(data.total || data.count || data.data.length);
      } else {
        throw new Error('Invalid API response structure');
      }

    } catch (err) {
      setError(err.message);
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch on mount and when dependencies change
  useEffect(() => {
    if (autoFetch) {
      fetchProducts();
    }
  }, [page, limit, category, search, minPrice, maxPrice, inStock, sortBy, sortOrder, autoFetch]);

  // Manual refetch function
  const refetch = () => {
    fetchProducts();
  };

  return {
    products,
    loading,
    error,
    totalCount,
    refetch,
    fetchProducts
  };
};

// Enhanced hook for single product
export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(STRAPI_API + `/api/products/${productId}?populate=*`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProduct(data);

    } catch (err) {
      setError(err.message);
      console.error('Error fetching product:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return {
    product,
    loading,
    error,
    refetch: fetchProduct
  };
};

// Hook for categories
export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        setCategories(Array.isArray(data) ? data : data.categories || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

// USAGE EXAMPLES:

// 1. Basic usage - fetch all products
/*
import { useProducts } from './hooks/useProducts';

function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
*/

// 2. With filters and pagination
/*
import { useProducts } from './hooks/useProducts';

function FilteredProducts() {
  const [filters, setFilters] = useState({
    category: 'cameras',
    page: 1,
    limit: 12,
    search: '',
    minPrice: 0,
    maxPrice: 1000,
    inStock: true
  });

  const { products, loading, error, totalCount } = useProducts(filters);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Products ({totalCount})</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        currentPage={filters.page}
        totalItems={totalCount}
        itemsPerPage={filters.limit}
        onPageChange={(page) => handleFilterChange({ page })}
      />
    </div>
  );
}
*/

// 3. Single product usage
/*
import { useProduct } from './hooks/useProducts';

function ProductDetail({ productId }) {
  const { product, loading, error } = useProduct(productId);

  if (loading) return <div>Loading product...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return <ProductCard product={product} />;
}
*/

// 4. Manual fetch with button
/*
function ProductsWithRefresh() {
  const { products, loading, error, refetch } = useProducts({ autoFetch: false });

  return (
    <div>
      <button onClick={refetch} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Products'}
      </button>

      {error && <div>Error: {error}</div>}

      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
*/

// 5. With search functionality
/*
function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const { products, loading, error } = useProducts({
    search: debouncedSearch,
    limit: 20
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded px-4 py-2 mb-4"
      />
      
      {loading && <div>Searching...</div>}
      {error && <div>Error: {error}</div>}
      
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
*/