'use client';
import { HiOutlineXMark } from "react-icons/hi2";


const AddQuantityForm = () => {
  
  const openQtyFormMain = () => {
    const qtyFormContain = document.getElementById('qty-form-conta');
    if (qtyFormContain) {
        // Check if the element has the specific class
        if (qtyFormContain.classList.contains('hidden')) {
          // Remove the class if it exists
          qtyFormContain.classList.remove('hidden');
          qtyFormContain.classList.add('flex');
          
        } else if (qtyFormContain.classList.contains('flex')) {
          // Add the class if it doesn't exist
          qtyFormContain.classList.remove('flex');
          qtyFormContain.classList.add('hidden');
          
        }
      }
  
}

  
  return (
    <div id="qty-form-conta" className="fixed hidden w-screen h-screen top-0 right-0 z-40 justify-center items-center padding" >
      <div onClick={openQtyFormMain} className="overlay absolute bg-black/30 w-screen h-screen"></div>
      <div className='relative z-50 bg-white w-full xl:w-1/2 lg:w-3/5 md:w-4/5 p-8 rounded-lg' >
        <form action="post" class="max-w-[600px]">
          <h3 className='text-primary text-2xl '> اضافة كمية جديدة</h3>
          <div class="space-y-6 pb-6">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-4 border-b border-gray-900/10 pb-6">
              <div class="sm:col-span-4">
                <label
                    for="product-name"
                    class="block text-lg font-medium leading-6 text-primary">
                    اسم المنتج
                </label>
                <div class="mt-2">
                  <input
                    required
                    type="text"
                    name="product-name"
                    id="product-name"
                    autocomplete="given-name"
                    placeholder='سماعات يبانى, سماعات المانى '
                    class="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div class="sm:col-span-4 flex flex-row flex-wrap gap-x-6">
                <label
                  for="item-price"
                  class="block text-lg font-medium leading-6 text-primary flex-1 w-full basis-full ">
                  سعر القطعة
                </label>
                <div class="mt-2 flex-1">
                  <input
                    required
                    id="item-price"
                    name="item-price"
                    type="number"
                    autocomplete="number"
                    min={0}
                    placeholder='سعر الشراء'
                    class="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                </div>
                <div class="mt-2 flex-1">
                  <input
                    required
                    id="item-price"
                    name="item-price"
                    type="number"
                    min={0}
                    autocomplete="number"
                    placeholder='سعرالبيع'
                    class="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                </div>
              </div>
            </div>  
            <div  class="mt-10 grid grid-cols-1 gap-x-6 sm:grid-cols-4 border-b border-gray-900/10 pb-6">
              <h3 className='text-primary text-xl col-span-4 mb-4'>اضافة لــ</h3>
              <div className="col-span-1 flex justify-center items-center my-1">
                <label
                  for="branch-one"
                  class="block text-lg font-medium leading-6 text-primary w-full flex-1">
                  فرع 1
                </label>
                <div class="flex-1">
                  <input
                    id="branch-one"
                    name="branch-one"
                    type="input"
                    placeholder=''
                    class="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center my-1">
                <label
                  for="branch-two"
                  class="block text-lg font-medium leading-6 text-primary w-full flex-1">
                  فرع 2
                </label>
                <div class="flex-1">
                  <input
                    id="branch-two"
                    name="branch-two"
                    type="input"
                    placeholder=''
                    class="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                </div>
              </div>
            </div>
          </div>

          <div class=" flex items-center justify-center gap-x-6 text-white">
              <span
                onClick={openQtyFormMain}
                class="absolute cursor-pointer top-0 left-0 text-lg font-semibold leading-6 bg-secondry p-2 rounded-full -translate-x-1/2 -translate-y-1/2"
              >
                <HiOutlineXMark />
                </span>
              <button
                type="submit"
                class="rounded-md bg-secondry px-8 py-4 text-2xl font-semibold shadow-sm hover:bg-secondry/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">إضافة منتج</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddQuantityForm