import './App.css';
import lake from "./image/lake.JPG";
import GalleryHeader from './components/GallaryHeader';
import GalleryMain from './components/GallaryMain';
import GallaryFooter from './components/GallaryFooter';

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
        {/* adding footer component */}
      <GalleryHeader />
        {/* adding main component */}
      <GalleryMain 
      imageData={imageData}
      />
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;