import { useForm } from "react-hook-form";
import SectionTitlel from "../components/SectionTitlel";
import { FaUtensils } from "react-icons/fa";
import useAxiosPiblic from "../Hooks/useAxiosPiblic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
    const { register, handleSubmit } = useForm();

    const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const axiosSecurepiblic = useAxiosPiblic()
    const axiosSecure = useAxiosSecure()



    const onSubmit = async (data) => {
        console.log(data); // Logs form data when submitted



        const imagefild = {image: data.image[0]}
        const res = await axiosSecurepiblic.post(image_hosting_api, imagefild, {

            headers:{ 'content-type' : 'multipart/form-data'}

        })

        if(res.data.success){
            const menuItem = {
                name:data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecure.post('/menue',menuItem)
            console.log(menuRes.data)

            if(menuRes.data.insertedId){
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name}  saved`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    
        console.log(res.data)
    };

    return (
        <div>
            <SectionTitlel subHeading="Add an item" Heading="What is New"></SectionTitlel>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Recipe Name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name *</span>
                        </div>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Recipe Name"
                            className="border-2 rounded-md border-gray-400 w-full"
                        />
                    </label>

                    {/* Category */}
                    <div className="flex items-center gap-8">
                        <label className="form-control w-full">
                            <span className="label-text">Category *</span>
                            <select
                                {...register("category", { required: true })}
                                defaultValue=""
                                className="select select-ghost border-2 my-8 border-gray-400 rounded-md w-full max-w-xs"
                            >
                                <option value="" disabled>
                                    Select the recipe
                                </option>
                                <option value="Salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Soup">Soup</option>
                                <option value="Desserts">Desserts</option>
                                <option value="Drinks">Other</option>
                            </select>
                        </label>

                        {/* Price */}
                        <label className="form-control w-full">
                            <span className="label-text">Price *</span>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                placeholder="Price"
                                className="border-2 rounded-md border-gray-400 w-full"
                            />
                        </label>
                    </div>

                    {/* Recipe Details */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Details *</span>
                        </div>
                        <textarea
                            {...register("recipe", { required: true })}
                            className="textarea textarea-bordered h-24 w-full"
                            placeholder="Write recipe details here..."
                        ></textarea>
                    </label>

                    {/* Image */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Image *</span>
                        </div>
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            className="file-input my-4 file-input-bordered w-full max-w-xs"
                        />
                    </label>

                    {/* Submit Button */}
                    <button type="submit" className="w-fit btn">
                        Add Item
                        <FaUtensils className="ml-4" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
