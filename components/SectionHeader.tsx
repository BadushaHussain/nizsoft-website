interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-5 py-2 bg-primary/10 border border-primary/30 rounded-full text-secondary text-xs lg:text-sm font-bold uppercase tracking-widest mb-6">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg lg:text-xl text-gray max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}