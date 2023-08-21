const Variables = ({ variable, content, line }) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-grisFont">{line}</span>
      <span className="text-naranja">const</span>
      <span>{variable}</span>
      <span className="text-naranja text-[10px]">=</span>
      <a href={content} target="blank" className="text-verde">
        {`'${content}'`}
      </a>
    </div>
  );
};

export default Variables;
