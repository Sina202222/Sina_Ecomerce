import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface ProductEditProps {
  productId: number | string; // Consider using this prop or remove it
  onSaveSuccess?: (data: any) => void;
}

interface Category {
  id: number;
  name: string;
}

interface Brand {
  id: number;
  name: string;
}

interface DiscountCode {
  id: number;
  code: string;
}

function ProductEdit({ onSaveSuccess }: ProductEditProps) {
  const { id } = useParams<{ id: string }>();  
  
  const [productData, setProductData] = useState({
    name_product: '',
    category: '',
    brand: '',
    discount_code: '',
    description: '',
    price: '',
    available: true,
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [discountCodes, setDiscountCodes] = useState<DiscountCode[]>([]);
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [images, setImages] = useState<File[]>([]); // State for images

  useEffect(() => {
    if (!id) {
      setError('شناسه محصول نامعتبر است');
      setLoading(false);
      return;
    }

    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/store/products/${id}/`);
        if (!response.ok) {
          throw new Error('بارگذاری محصول با خطا مواجه شد');
        }

        const data = await response.json();
        setProductData({
          name_product: data.name_product ?? '',
          category: data.category ?? '',
          brand: data.brand ?? '',
          discount_code: data.discount_code ?? '',
          description: data.description ?? '',
          price: data.price ?? '',
          available: data.available === true,
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/store/categories/');
        if (!response.ok) {
          throw new Error('بارگذاری دسته‌بندی‌ها با خطا مواجه شد');
        }
        const data = await response.json();
        setCategories(data);
      } catch (err: any) {
        setError(err.message);
      }
    };
    
    const fetchBrands = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/store/brands/');
        if (!response.ok) {
          throw new Error('بارگذاری برندها با خطا مواجه شد');
        }
        const data = await response.json();
        setBrands(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    const fetchDiscountCodes = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/store/discountcodes/');
        if (!response.ok) {
          throw new Error('بارگذاری کدهای تخفیف با خطا مواجه شد');
        }
        const data = await response.json();
        setDiscountCodes(data);
      } catch (err: any) {
        setError(err.message);
      }
    };
    
    fetchProductData();
    fetchCategories();
    fetchBrands();
    fetchDiscountCodes();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked; // Type assertion
      setProductData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setProductData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files)); // Store selected images
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    if (!id) {
      setError('شناسه محصول نامعتبر است');
      setSaving(false);
      return;
    }

    const payload = {
      ...productData,
      price: parseFloat(productData.price.toString()),
    };

    try {
      const formData = new FormData();
      Object.keys(payload).forEach((key) => {
        const value = payload[key as keyof typeof payload];
        formData.append(key, value !== undefined ? value.toString() : ''); // Ensure value is a string
      });

      images.forEach((image) => {
        formData.append('images', image); // Append each image to FormData
      });

      const response = await fetch(`http://127.0.0.1:8000/store/products/${id}/`, {
        method: 'PATCH',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('ویرایش محصول با خطا مواجه شد');
      }

      const data = await response.json();
      if (onSaveSuccess) {
        onSaveSuccess(data);
      }
      alert('محصول با موفقیت ویرایش شد.');

    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div className="text-red-600">خطا: {error}</div>;

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-md shadow-md">
      <h2 className="text-xl mb-4 font-semibold">ویرایش محصول</h2>
      
      <div>
        <label className="block mb-1 font-medium">نام محصول:</label>
        <input
          type="text"
          name="name_product"
          value={productData.name_product}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      
      <div>
        <label className="block mb-1 font-medium">دسته‌بندی:</label>
        <select
          name="category"
          value={productData.category}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
        >
          <option value="">انتخاب دسته‌بندی</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">برند:</label>
        <select
          name="brand"
          value={productData.brand}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
        >
          <option value="">انتخاب برند</option>
          {brands.map(brand => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">کد تخفیف:</label>
        <select
          name="discount_code"
          value={productData.discount_code}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
        >
          <option value="">انتخاب کد تخفیف</option>
          {discountCodes.map(dc => (
            <option key={dc.id} value={dc.id}>
              {dc.code}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">توضیحات:</label>
        <textarea
          name="description"
          value={productData.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
        
      <div>
        <label className="block mb-1 font-medium">قیمت:</label>
        <input
          type="number"
          name="price"
          value={productData.price}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">تصاویر:</label>
        <input
          type="file"
          multiple
          onChange={handleImageChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
      </div>

      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <input
          type="checkbox"
          name="available"
          checked={productData.available}
          onChange={handleChange}
          id="available"
          className="h-5 w-5"
        />
        <label htmlFor="available" className="font-medium">
          محصول موجود است
        </label>
      </div>

      <button
        type="submit"
        disabled={saving}
        className={`px-4 py-2 rounded text-white ${saving ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {saving ? 'در حال ذخیره...' : 'ذخیره تغییرات'}
      </button>
    </form>
  );
}

export default ProductEdit;
