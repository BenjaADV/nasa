'use client';

import type React from 'react';

import { useState, useRef } from 'react';
import { CloudUpload, CircleX, Trash2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

type FileStatus = 'uploading' | 'complete';

interface FileItem {
  id: string;
  name: string;
  size: number;
  totalSize: number;
  type: string;
  status: FileStatus;
  progress: number;
}

export function FileUploader() {
  const [files, setFiles] = useState<FileItem[]>([
    {
      id: '1',
      name: 'Elemento-combustible-2025.pdf',
      size: 60,
      totalSize: 120,
      type: 'application/pdf',
      status: 'uploading',
      progress: 50,
    },
    {
      id: '2',
      name: 'Elemento-combustible-2024.pdf',
      size: 94,
      totalSize: 94,
      type: 'application/pdf',
      status: 'complete',
      progress: 100,
    },
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;

    const newFiles: FileItem[] = Array.from(selectedFiles)
      .map((file) => {
        if (
          !file.type.includes('pdf') &&
          !file.type.includes('excel') &&
          !file.type.includes('spreadsheetml')
        ) {
          alert('Solo se permiten archivos PDF o Excel');
          return null;
        }

        return {
          id: crypto.randomUUID(),
          name: file.name,
          size: 0,
          totalSize: file.size / 1024, // Convert to KB
          type: file.type,
          status: 'uploading',
          progress: 0,
        };
      })
      .filter(Boolean) as FileItem[];

    if (newFiles.length === 0) return;

    setFiles((prev) => [...prev, ...newFiles]);

    newFiles.forEach((file) => {
      simulateFileUpload(file.id);
    });
  };

  const simulateFileUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        setFiles((prev) =>
          prev.map((file) =>
            file.id === fileId
              ? {
                  ...file,
                  status: 'complete',
                  progress: 100,
                  size: file.totalSize,
                }
              : file
          )
        );
      } else {
        setFiles((prev) =>
          prev.map((file) =>
            file.id === fileId
              ? {
                  ...file,
                  progress,
                  size: Math.round((file.totalSize * progress) / 100),
                }
              : file
          )
        );
      }
    }, 200);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const droppedFiles = e.dataTransfer.files;
    if (!droppedFiles || droppedFiles.length === 0) return;

    const newFiles: FileItem[] = Array.from(droppedFiles)
      .filter(
        (file) =>
          file.type.includes('pdf') ||
          file.type.includes('excel') ||
          file.type.includes('spreadsheetml')
      )
      .map((file) => ({
        id: crypto.randomUUID(),
        name: file.name,
        size: 0,
        totalSize: Math.floor(file.size / 1024),
        type: file.type,
        status: 'uploading',
        progress: 0,
      }));

    if (newFiles.length === 0) {
      alert('Solo se permiten archivos PDF o Excel');
      return;
    }

    setFiles((prev) => [...prev, ...newFiles]);

    // Simulate upload progress for each file
    newFiles.forEach((file) => {
      simulateFileUpload(file.id);
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDeleteFile = (fileId: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4 mt-2">
      {/* Upload area */}
      <div
        className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <CloudUpload className="h-6 w-6 text-gray-800 mb-4" />
        <h3 className="text-base font-medium text-gray-800">Elige un archivo o arrástralo aquí</h3>
        <p className="text-sm text-gray-400 mb-4">Formato PDF o Excel</p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf,.xls,.xlsx,.csv"
          multiple
        />
        <Button
          onClick={handleButtonClick}
          variant="outline"
          className="border-purple-600 text-purple-600 bg-white hover:bg-purple-50 rounded-xs"
        >
          Subir archivo
        </Button>
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="space-y-3">
          {files.map((file) => (
            <div
              key={file.id}
              className="bg-white rounded-lg border border-gray-200 p-4 flex items-start"
            >
              <div className="h-10 w-10 bg-red-100 rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                <div className="text-xs font-bold text-red-600">PDF</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div className="font-medium text-gray-800 leading-[100%] tracking-[0%] truncate">
                    {file.name}
                  </div>
                  {file.status === 'complete' ? (
                    <button
                      onClick={() => handleDeleteFile(file.id)}
                      className="text-gray-400 hover:text-gray-600 ml-2"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  ) : (
                    <button className="teCircleXt-gray-400 ml-2">
                      <CircleX className="h-5 w-5" />
                    </button>
                  )}
                </div>
                <div className="text-xs text-gray-500 flex items-center mt-1">
                  {file.size > 2000 ? `${(file.size / 1024).toFixed(2)} MB` : `${file.size} KB`} de{' '}
                  {file.totalSize > 2000
                    ? `${(file.totalSize / 1024).toFixed(2)} MB`
                    : `${file.totalSize} KB`}
                  {file.status === 'uploading' && (
                    <span className="ml-2 flex items-center text-gray-500">
                      <svg
                        className="animate-spin -ml-0.5 mr-1.5 h-3 w-3 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Cargando
                    </span>
                  )}
                  {file.status === 'complete' && (
                    <span className="ml-2 flex items-center text-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Completo
                    </span>
                  )}
                </div>
                {file.status === 'uploading' && (
                  <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-500 h-full"
                      style={{ width: `${file.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-4">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              Carga manual
            </Button>

            <Button
              type="button"
              variant="default"
              size="sm"
              className=" h-8 px-4 bg-purple-600 hover:bg-purple-700 text-white"
            >
              Guardar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
