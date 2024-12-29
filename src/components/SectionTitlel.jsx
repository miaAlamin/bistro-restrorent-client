

const SectionTitlel = ({subHeading, Heading}) => {
    return (
        <div className="w-4/12 mx-auto my-8">
            <p className="text-center text-yellow-600 mb-2">---{subHeading}---</p>
            <h1 className="font-bold uppercase border-y-4 py-4 text-center text-xl md:text-2xl lg:text-3xl">{Heading}</h1>
        </div>
    );
};

export default SectionTitlel;