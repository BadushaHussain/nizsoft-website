export default function SkeletonLoader({
    variant = 'card',
    count = 1,
    className = ''
}: {
    variant?: 'card' | 'text' | 'circle' | 'image' | 'stat'
    count?: number
    className?: string
}) {
    const skeletons = Array.from({ length: count })

    const variants = {
        card: (
            <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/8 rounded-2xl p-8 animate-pulse">
                <div className="h-12 w-12 bg-white/10 rounded-xl mb-6" />
                <div className="h-6 bg-white/10 rounded mb-4 w-3/4" />
                <div className="space-y-2">
                    <div className="h-4 bg-white/10 rounded w-full" />
                    <div className="h-4 bg-white/10 rounded w-5/6" />
                </div>
            </div>
        ),
        text: (
            <div className="space-y-2 animate-pulse">
                <div className="h-4 bg-white/10 rounded w-full" />
                <div className="h-4 bg-white/10 rounded w-11/12" />
                <div className="h-4 bg-white/10 rounded w-4/5" />
            </div>
        ),
        circle: (
            <div className="h-16 w-16 bg-white/10 rounded-full animate-pulse" />
        ),
        image: (
            <div className="w-full h-64 bg-white/10 rounded-xl animate-pulse" />
        ),
        stat: (
            <div className="text-center animate-pulse">
                <div className="h-12 bg-white/10 rounded w-24 mx-auto mb-3" />
                <div className="h-4 bg-white/10 rounded w-32 mx-auto" />
            </div>
        )
    }

    return (
        <div className={className}>
            {skeletons.map((_, index) => (
                <div key={index} className={count > 1 ? 'mb-4' : ''}>
                    {variants[variant]}
                </div>
            ))}
        </div>
    )
}
