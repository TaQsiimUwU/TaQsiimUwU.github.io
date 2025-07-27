export const NewGame = () => {
  return (
    <div className="showcase-section">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Show Case</h2>

      <div className="bg-[#2a293a] border border-[#6165B5] p-6 rounded-sm">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Featured Project</h3>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              An interactive showcase of my most impressive work and latest experiments.
              Coming soon with interactive demos and case studies.
            </p>

            <div className="bg-[#1f1e2e] p-8 rounded-sm w-full max-w-md mx-auto border border-[#6165B5] opacity-75">
              <div className="animate-pulse">
                <div className="h-4 bg-[#6165B5] rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-[#6165B5] rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-[#6165B5] rounded w-5/6 mb-8"></div>

                <div className="h-40 bg-[#6165B5] rounded mb-4"></div>

                <div className="h-4 bg-[#6165B5] rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-[#6165B5] rounded w-1/2"></div>
              </div>

              <div className="mt-8 text-center">
                <span className="text-[#a8b4ff]">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
