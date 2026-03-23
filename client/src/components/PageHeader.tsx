interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="py-16 md:py-20 bg-[hsl(210_10%_12%)] text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
