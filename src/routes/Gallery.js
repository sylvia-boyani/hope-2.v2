import "./Gallery.css";
// import { SRLWrapper } from "simple-react-lightbox";
const videoPlayer2 =
  "https://res.cloudinary.com/defml0xz0/video/upload/v1682164988/video1_msp4xo.mp4";
const videoPlayer4 =
  "https://res.cloudinary.com/defml0xz0/video/upload/v1682277540/video4_ookos1.mp4https://res.cloudinary.com/defml0xz0/video/upload/v1682277540/video4_ookos1.mp4https://res.cloudinary.com/defml0xz0/video/upload/v1682277540/video4_ookos1.mp4";
  const videoPlayer5 =
  "https://res.cloudinary.com/defml0xz0/video/upload/v1682277538/video5_mttjpv.mp4";
  const videoPlayer6 =
  "https://res.cloudinary.com/defml0xz0/video/upload/v1682277542/video6_nfdlg9.mp4";
  const videoPlayer7=
  "https://res.cloudinary.com/defml0xz0/video/upload/v1682277531/video7_qugqyn.mp4";
  const videoPlayer =
  "https://res.cloudinary.com/defml0xz0/video/upload/v1682277456/bible-70216_fxxmlf.mp4";
const imageURL =
  "https://res.cloudinary.com/defml0xz0/image/upload/v1682278939/events_uwisew.jpg";
export default function Gallery() {
  return (
    <div className="Gallery">
      <h2>Take a look at some of our events!</h2>
      {/* <SRLWrapper> */}
      <div className="container1">
        <div className="image-card">
          <img className="img" src={imageURL} alt="Umbrella" />
        </div>
        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer7} />
          </video>
        </div>

        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer6} />
          </video>
        </div>

        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer5} />
          </video>
        </div>

        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer5} /> 
          </video>
        </div>

        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer2} />
          </video>
        </div>

        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer} />
          </video>
        </div>

        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer7} />
          </video>
        </div>

        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer5} />
          </video>
        </div>

        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer2} />
          </video>
        </div>

        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer} />
          </video>
        </div>

        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer7} />
          </video>
        </div>
      </div>
      {/* </SRLWrapper> */}
    </div>
  );
}
