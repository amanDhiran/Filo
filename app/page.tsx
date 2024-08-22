// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
          {/* Title + Desc */}
          <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl text-center font-bold lg:text-6xl">Free Image Converter</h1>
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
              Convert images in bulk without losing their quality or installing any software using Filo’s Image converter tool. It’s fast, free & easy-to-use!
              </p>
          </div>

          {/* Upload Box */}
          <Dropzone />
      </div>
  );
}