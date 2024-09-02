export const AnimatedText = ({ text }) => {
  return (
    <span>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className="letter"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};
