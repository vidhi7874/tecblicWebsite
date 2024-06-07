import { urlForImage } from '../../../sanity/lib/image';
const Avatar = (props) => {
  console.log('props: for url >>', props.url);
  return (
    <>
      <div
        style={{
          width: '2000px', // Adjust the width as needed
          height: '2000px', // Adjust the height as needed
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${props.url})`,
        }}
      ></div>
    </>
  );
};

export default Avatar;
