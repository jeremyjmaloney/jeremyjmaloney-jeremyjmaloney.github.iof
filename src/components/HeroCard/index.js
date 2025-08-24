export const HeroCard = ({isRow = false, image, imageWidth="w-40", primaryText = "", secondaryText="", hasCta = false, ctaText="", href="#", id="", bgColor= "", margin="0", padding="0" }) => {
  return(
    <div id={id} className={`${bgColor} flex ${isRow ? "flex-row" : "flex-col"} items-center h-fit ${margin} ${padding}`}>
      <img src={image} className={`rounded-2xl ${imageWidth} grayscale hover:blur-sm`} alt='profile headshot' />
      {primaryText && (
        <p className="text-5xl font-semibold tracking-tight text-balance text-stone-600 sm:text-7xl my-10">
          {primaryText}
        </p>
      )}
      {secondaryText && (
        <p className="text-2xl font-semibold tracking-tight text-balance text-stone-600 sm:text-7xl m-10 w-8/12">
          {secondaryText}
        </p>
      )}
      {hasCta && (
        <a href={href} className="rounded-md bg-cyan-400 px-3.5 py-2.5 text-sm font-semibold text-stone-600 shadow-xs hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300">
        {ctaText}
      </a>
      )}
    </div>
  )
}