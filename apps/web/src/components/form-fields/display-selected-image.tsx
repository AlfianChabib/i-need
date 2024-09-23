import Image from "next/image";
import { Icon } from "../lucide-icon";
import { useSelectedImageStore } from "@/store/selected-image-store";

export default function DisplaySelectedImage() {
  const { selectedImage } = useSelectedImageStore();

  return (
    <div className="rounded-md flex overflow-hidden w-12 h-12 items-center justify-center bg-slate-200">
      {selectedImage ? (
        <Image
          src={URL.createObjectURL(selectedImage)}
          alt="selected"
          width={100}
          height={100}
          className="w-12 h-12 object-cover"
        />
      ) : (
        <Icon name="Image" size={20} className="text-slate-700" />
      )}
    </div>
  );
}
