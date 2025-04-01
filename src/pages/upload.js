import { useState } from 'react';
import { Client, Storage } from 'appwrite';
import UploadForm from '../components/UploadForm';

const client = new Client();
client
  .setEndpoint('https://[YOUR_APPWRITE_ENDPOINT]')
  .setProject('[YOUR_PROJECT_ID]');

const storage = new Storage(client);

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError(null);

    try {
      const response = await storage.createFile('[YOUR_BUCKET_ID]', file);
      console.log('File uploaded successfully:', response);
      // Save video metadata to the database
      // ...
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Upload Video</h1>
      <UploadForm
        file={file}
        title={title}
        description={description}
        uploading={uploading}
        error={error}
        onFileChange={handleFileChange}
        onTitleChange={handleTitleChange}
        onDescriptionChange={handleDescriptionChange}
        onUpload={handleUpload}
      />
    </div>
  );
};

export default Upload;
