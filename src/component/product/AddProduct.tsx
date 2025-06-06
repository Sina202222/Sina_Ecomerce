import  { useState, useEffect } from 'react';
import axios from 'axios';


function AddProduct() {



  const [formData, setFormData] = useState({
    name_product: '',
    category: '',
    brand: '',
    discount_code: '',
    description: '',
    price: '',
    available: true,
  });

  const [images, setImages] = useState<File[]>([]); // State for images
  const [categories, setCategories] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  
  const [discountCodes, setDiscountCodes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
 
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');


  useEffect(() => {
    // Fetch categories, brands, discount codes in parallel
    const fetchData = async () => {
      try {
        const [catRes, brandRes, discountRes] = await Promise.all([
          fetch('http://127.0.0.1:8000/store/categories/'),
          fetch('http://127.0.0.1:8000/store/brands/'),
          fetch('http://127.0.0.1:8000/store/discountcodes/'),
        ]);
        if (!catRes.ok || !brandRes.ok || !discountRes.ok) {
          throw new Error('Failed to load form options');
        }
        const [catData, brandData, discountData] = await Promise.all([
          catRes.json(),
          brandRes.json(),
          discountRes.json(),
        ]);

        setCategories(catData);
        setBrands(brandData);
        setDiscountCodes(discountData);
        setLoading(false);
      } catch (err : any) {
        setError(err.message || 'Error loading data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleChange = (e : any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e : any) => {
    setImages(Array.from(e.target.files)); // Store selected images
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccessMsg('');
    try {
      // Prepare payload
      const formDataToSend = new FormData(); // Create a new FormData instance
      formDataToSend.append('name_product', formData.name_product  || ''); // Use the state variable
      formDataToSend.append('category', formData.category  || '');
      formDataToSend.append('brand', formData.brand  || '');
      formDataToSend.append('discount_code', formData.discount_code || '');
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price ? parseFloat(formData.price).toString() : '0');
      formDataToSend.append('available', formData.available ? 'true' : 'false' );

      images.forEach(image => {
        formDataToSend.append('images', image); // Append each image to FormData
      });

      const response = await axios.post('http://127.0.0.1:8000/store/products/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });


      if (!response) {
        throw new Error('Failed to add product');
      }
      setSuccessMsg('محصول با موفقیت اضافه شد.');
      setFormData({
        name_product: '',
        category: '',
        brand: '',
        discount_code: '',
        description: '',
        price: '',
        available: true,
      });

      setImages([]); // Clear images after submission

    } catch (err : any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };


  if (loading) return <div className="text-center mt-10">در حال بارگذاری اطلاعات...</div>;
  

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-10 text-right " >
      <h1 className="text-2xl font-bold mb-6">اضافه کردن محصول جدید</h1>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      {successMsg && <div className="mb-4 text-green-600">{successMsg}</div>}
        <form onSubmit={handleSubmit} className="space-y-6 ">
            <div>
              <label className="block mb-1 font-medium ">نام محصول:</label>
              <input
                  type="text"
                  name="name_product"
                  value={formData.name_product}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>

            <div>
              <label className="block mb-1 font-medium">دسته‌بندی:</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-right">


                <option value="" >انتخاب دسته‌بندی</option>
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
            value={formData.brand}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-right">

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
            value={formData.discount_code}
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
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            // rows="4"
          />
        
        </div>
        
        <div>
          <label className="block mb-1 font-medium">قیمت:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
       
        </div>

        <div>
          <label className="block mb-1 font-medium">تصاویر:</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 " 
          />
        </div>

        <div className="flex items-center space-x-3 rtl:space-x-reverse ">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
            id="available"
            className="h-5 w-5 "
          />
          <label htmlFor="available" className="font-medium ">
            محصول موجود است
          </label>
        </div>
       
        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-3 rounded text-white ${
            submitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}>
            {submitting ? 'در حال ارسال...' : 'افزودن محصول'}
        </button>


        </form>
    </div>
    


  )
}

export default AddProduct