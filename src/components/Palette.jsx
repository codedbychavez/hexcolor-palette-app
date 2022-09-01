import HexCard from "./HexCard";

export default function Palette(props) {
  return (
    <div>
      <h1>Trending Hex Colors</h1>
      <div className="palette">
        <For each={props.hexColors}>
          {(hexColor) => {
            return (
              <HexCard color={hexColor} />
            )
          }}
        </For>
      </div>
    </div>
  )
}