import { FormEvent, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../component/uploadWidget";
import axios from "axios";
import myAxios from "../lib/axiosConfig";

interface FormInputs {
  title: FormDataEntryValue;
  price: FormDataEntryValue;
  address: FormDataEntryValue;
  city: FormDataEntryValue;
  bedroom: FormDataEntryValue;
  bathroom: FormDataEntryValue;
  type: FormDataEntryValue;
  property: FormDataEntryValue;
  latitude: FormDataEntryValue;
  longitude: FormDataEntryValue;
  utilities: FormDataEntryValue;
  pet: FormDataEntryValue;
  income: FormDataEntryValue;
  size: FormDataEntryValue;
  school: FormDataEntryValue;
  bus: FormDataEntryValue;
  restaurant: FormDataEntryValue;
}

function CreatePostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState("");

  const nav = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputs = Object.fromEntries(
      formData.entries()
    ) as unknown as FormInputs;

    const parseNumber = (value: FormDataEntryValue): number | undefined => {
      const parsed = parseInt(value as string);
      return isNaN(parsed) ? undefined : parsed;
    };

    try {
      const res = await myAxios.post(`/api/post/`, {
        data: {
          title: inputs.title,
          price: parseNumber(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseNumber(inputs.bedroom),
          bathroom: parseNumber(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        detail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseNumber(inputs.size),
          school: parseNumber(inputs.school),
          bus: parseNumber(inputs.bus),
          restaurant: parseNumber(inputs.restaurant),
        },
      });
      nav("/detail/" + res.data.data.id);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        let errorMessage: string = error.response?.data;
        if (typeof errorMessage !== "string") {
          errorMessage = error.response?.data?.errors[0]?.message;
        }
        setError(errorMessage);
      }
    }
  };

  return (
    <div className="h-full flex">
      <div className="basis-3/5 overflow-y-scroll">
        <h1>Add New Post</h1>
        <div className="mt-7 mr-12 mb-[100px] ml-0">
          <form
            className="flex justify-between flex-wrap gap-5"
            onSubmit={handleSubmit}
          >
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="title">Title</label>
              <input
                className="p-2 rounded border-1 border-solid border-gray-500"
                id="title"
                name="title"
                type="text"
              />
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="price">Price</label>
              <input
                className="p-2 rounded border-1 border-solid border-gray-500"
                id="price"
                name="price"
                type="number"
              />
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="address">Address</label>
              <input
                className="p-2 rounded border-1 border-solid border-gray-500"
                id="address"
                name="address"
                type="text"
              />
            </div>
            <div className=" flex flex-col gap-1 w-full h-[320px]">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="city">City</label>
              <input
                className="p-2 rounded border-1 border-solid border-gray-500"
                id="city"
                name="city"
                type="text"
              />
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input
                className="p-2 rounded border-1 border-solid border-gray-500"
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
              />
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input
                className="p-2 rounded border-1 border-solid border-gray-500"
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
              />
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="latitude">Latitude</label>
              <input
                className="p-2 rounded border-1 border-solid border-gray-500"
                id="latitude"
                name="latitude"
                type="text"
              />
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="longitude">Longitude</label>
              <input
                className="p-2 rounded border-1 border-solid border-gray-500"
                id="longitude"
                name="longitude"
                type="text"
              />
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="type">Type</label>
              <select className="p-2" name="type">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="property">Property</label>
              <select className="p-2" name="property">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="utilities">Utilities Policy</label>
              <select className="p-2" name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="pet">Pet Policy</label>
              <select className="p-2" name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="income">Income Policy</label>
              <input
                className="p-2 rounded border-1 border-solid border-gray-500"
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="size">Total Size (sqft)</label>
              <input
                className="p-2 rounded border-1 border-solid border-gray-500"
                min={0}
                id="size"
                name="size"
                type="number"
              />
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="school">School</label>
              <input
                className="p-2 rounded border-1 border-solid border-gray-500"
                min={0}
                id="school"
                name="school"
                type="number"
              />
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="bus">bus</label>
              <input
                className="p-2 rounded border-1 border-solid border-gray-500"
                min={0}
                id="bus"
                name="bus"
                type="number"
              />
            </div>
            <div className="flex w-[30%] gap-1 flex-col">
              <label htmlFor="restaurant">Restaurant</label>
              <input
                className="p-2 rounded border-1 border-solid border-gray-500"
                min={0}
                id="restaurant"
                name="restaurant"
                type="number"
              />
            </div>
            <button className="w-[30%] rounded border-0 bg-teal-700 text-white font-bold cursor-pointer">
              Add
            </button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="basis-2/5 bg-[#84DCC6]  flex  gap-1 flex-col items-center justify-center">
        {images.map((image, index) => (
          <img className="w-1/2 object-cover" src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default CreatePostPage;
