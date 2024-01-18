import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BootstrapTable = () => {
  // Data contoh untuk tabel
  const data = [
  ];

  return (
    <div className="container mt-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Writer</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.writer}</td>
              <td>{item.category}</td>
              <td>
                {/* Menggunakan split untuk mengubah string tags menjadi array */}
                <span class="badge rounded-pill text-bg-secondary">{item.status}</span> 
              </td>
              <td>
                {/* Menggunakan Badge untuk kolom Status */}
                <span class="badge rounded-pill text-bg-secondary">{item.status}</span>
                <span class="badge rounded-pill text-bg-warning">{item.status}</span>
              </td>
              <td>
                {/* Tambahkan tombol atau aksi sesuai kebutuhan */}
                <button className="btn btn-primary">Edit</button>
                
                <button className="btn btn-danger ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BootstrapTable;
