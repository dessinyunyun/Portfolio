import React from "react";
import axios from "axios";
import "./add.css";
const CrudPortofolio = () => {
  const [deskripsitext, setdeskripsitext] = React.useState("");
  const [judul, setnewJudul] = React.useState("");
  const [link, setnewnewLink] = React.useState("");
  const [newImage, setNewImage] = React.useState("");
  const [imagePreviews, setImagePreviews] = React.useState(null);
  const [perubahan, setPerubahan] = React.useState(false);
  console.log(newImage);
  console.log(deskripsitext);
  console.log(link);
  console.log(judul);

  const addStatus = async (e) => {
    e.preventDefault();

    // const data = {
    //   text: deskripsitext,
    //   judul: judul,
    //   link: link,
    //   image: newImage,
    // };

    const datanya = new FormData();
    datanya.append("text", deskripsitext);
    datanya.append("judul", judul);
    datanya.append("link", link);
    datanya.append("image", newImage);

    // let config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };
    await axios
      .post("http://localhost:5000/admin", datanya, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error:", err);
      });

    alert("Portofolio sudah ditambahkan!");
    setNewImage("");
    setImagePreviews("");
    setnewJudul("");
    setnewnewLink("");
    setdeskripsitext("");
  };

  const writeStatus = (e) => {
    setdeskripsitext((prev) => e.target.value);
  };

  const writeJudul = (e) => {
    setnewJudul((prev) => e.target.value);
  };

  const writeLink = (e) => {
    setnewnewLink((prev) => e.target.value);
  };

  const ImageUpload = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
    console.log(newImage.length);
    if (file) {
      setImagePreviews(URL.createObjectURL(file));
    }
  };

  const closeImage = () => {
    setNewImage("");
    setImagePreviews(null);
  };

  React.useEffect(() => {
    // getStatus();
  }, []);
  return (
    <div className="container add-container">
      <div class="row mt-5 justify-content-center">
        <div class="col-sm-8">
          <h1>Add Portfolio</h1>

          <form onSubmit={addStatus}>
            <div class="judul mb-3">
              <input type="text" placeholder="judul" value={judul} onChange={writeJudul} />
            </div>

            <div class="text mb-3">
              <textarea name="" id="" placeholder="deskripsi" value={deskripsitext} onChange={writeStatus}></textarea>
            </div>

            <div class="link mb-3">
              <input type="text" placeholder="link: www." value={link} onChange={writeLink} />
            </div>
            <div class="imagePreviews mb-3">
              {imagePreviews && (
                <div className="bingkai-gambar p-2 mb-3 position-relative">
                  <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0" onClick={closeImage} aria-label="Close"></button>
                  <img src={imagePreviews} alt="" /> <figcaption className="m-auto caption-image">{newImage.name}</figcaption>
                </div>
              )}
            </div>

            <div class="footer-status d-flex justify-content-between">
              <div class="media  mb-3">
                <label for="uploadGambar" className="upload-image">
                  <img src="/gallery.png" alt="galerry" /> Add Image
                </label>
                <input type="file" id="uploadGambar" onChange={ImageUpload} class="btn btn-outline-secondary d-none" />
              </div>
              <div class="tombol-war">
                {deskripsitext.length > 0 || judul.length > 0 || link.length > 0 || newImage ? (
                  <button className="btn btn-primary rounded-pill btn-sm" type="submit">
                    Add New Project
                  </button>
                ) : (
                  // <div className="btn button-tidak-aktif rounded-pill btn-sm" data-bs-dismiss="modal" aria-label="Close">
                  //   War!!!
                  // </div>
                  <button type="button" class="btn  button-notactive rounded-pill btn-sm">
                    Add New Project
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrudPortofolio;
