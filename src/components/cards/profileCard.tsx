const ProfileCard: React.FC<{
  image: string;
  name: string;
  description: string;
}> = ({ image, name, description }) => {
  return (
    <div className="mx-4 max-w-xs sm:min-w-fit">
      <div className="min-h-sm max-h-md w-max max-w-[180px] sm:w-full">
        <img src={image} alt="" className="h-full w-full object-contain" />
      </div>
      <h3 className="mt-4 text-lg font-bold">{name}</h3>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
};

export default ProfileCard;
