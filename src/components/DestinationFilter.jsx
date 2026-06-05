export default function DestinationFilter({ filters, active, onChange }) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2.5 min-w-0" role="group" aria-label="Filter destinations by type">
      {filters.map((filter) => {
        const isActive = filter === active
        return (
          <button
            key={filter}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter)}
            className={`shrink-0 px-[18px] py-2 rounded-full text-sm leading-[1.35] border transition-all duration-200 cursor-pointer
              focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-[3px]
              ${
                isActive
                  ? 'border-gold bg-gold text-black font-medium'
                  : 'border-white/25 bg-transparent text-white/70 hover:border-white/70 hover:text-white'
              }`}
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}
