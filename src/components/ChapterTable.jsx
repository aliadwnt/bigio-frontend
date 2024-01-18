import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ChapterList = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  // Data contoh untuk tabel
  const data = [
  ];

  // State untuk menyimpan data chapter yang sedang diedit
  const [editChapter, setEditChapter] = useState({ id: null, title: '' });

  // Fungsi untuk menampilkan modal edit
  const handleEditClick = (id, title) => {
    setEditChapter({ id, title });
    setShowEditModal(true);
  };

  // Fungsi untuk menutup modal edit
  const handleModalClose = () => {
    setShowEditModal(false);
  };

  // Fungsi untuk menyimpan perubahan saat mengedit
  const handleEditSave = () => {
    // Implementasi penyimpanan data yang diubah (misalnya ke backend)
    // Setelah selesai, tutup modal
    setShowEditModal(false);
  };

  return (
    <div className="container mt-5">
      {/* Button "Add Chapter" di atas kanan */}
      <div className="d-flex justify-content-end mb-3">
        <Link to="/addChapter" className="btn btn-primary">
          Add Chapter
        </Link>
      </div>

      {/* Tabel dengan kolom "Title", "Last Update", dan "Action" */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Last Update</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.lastUpdate}</td>
              <td>
                {/* Tombol "Edit" */}
                <button
                  className="btn btn-secondary btn-sm mr-2"
                  onClick={() => handleEditClick(item.id, item.title)}
                >
                  Edit
                </button>
                {/* Tombol "Delete" */}
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button "Cancel" dan "Edit" di bawah tabel */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary">Cancel</button>
        <button className="btn btn-primary">Save</button>
      </div>

      {/* Modal Edit */}
      <div
        className={`modal fade ${showEditModal ? 'show' : ''}`}
        style={{ display: showEditModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Chapter Title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={handleModalClose}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={editChapter.title}
                onChange={(e) =>
                  setEditChapter({ ...editChapter, title: e.target.value })
                }
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleModalClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleEditSave}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterList;
