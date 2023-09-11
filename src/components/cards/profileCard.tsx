const ProfileCard: React.FC<{
  image: string;
  name: string;
  description: string;
}> = ({ image, name, description }) => {
  return (
    <div className="w-[220px] mx-4">
      <div className="w-full h-[220px]">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <h3 className="font-bold text-lg mt-4">{name}</h3>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
};

export default ProfileCard;
