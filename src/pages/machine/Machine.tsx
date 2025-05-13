import { FileUploader } from '@/components/shared/filePicker/FileUploader';

const Machine = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-purple-600">Nuevo Elemento Combustible</h1>

      <FileUploader />
    </div>
  );
};

export default Machine;
