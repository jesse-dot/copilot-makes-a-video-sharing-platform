import React from 'react';

const UploadForm = ({
  file,
  title,
  description,
  uploading,
  error,
  onFileChange,
  onTitleChange,
  onDescriptionChange,
  onUpload,
}) => {
  return (
    <form onSubmit={onUpload}>
      <div>
        <label htmlFor="file">Video File</label>
        <input type="file" id="file" onChange={onFileChange} />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={onTitleChange} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" value={description} onChange={onDescriptionChange} />
      </div>
      <button type="submit" disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default UploadForm;
