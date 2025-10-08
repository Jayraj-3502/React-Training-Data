export default function EasyTask1() {
  const onePieceCharacters = [
    "Ace", // A
    "Brook", // B
    "Chopper", // C
    "Doflamingo", // D
    "Enel", // E
    "Franky", // F
    "Garp", // G
    "Hancock", // H
    "Ivankov", // I
    "Jinbe", // J
    "Kaido", // K
    "Luffy", // L
    "Mihawk", // M
    "Nami", // N
    "Oden", // O
    "Perona", // P
    "Queen", // Q
    "Robin", // R
    "Sanji", // S
    "Teach", // T (Blackbeard)
    "Usopp", // U
    "Vivi", // V
    "Whitebeard", // W
    "X Drake", // X
    "Yamato", // Y
    "Zoro", // Z
  ];

  return (
    <div className="h-[200px] overflow-auto">
      {onePieceCharacters.map((name, index) => {
        return <div key={`${index}${name}`}>{name}</div>;
      })}
    </div>
  );
}
