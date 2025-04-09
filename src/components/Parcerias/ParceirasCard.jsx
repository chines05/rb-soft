export default function ParceirasCard({ img }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <img
        src={img}
        width={130}
        className="w-full rounded-full flex items-center justify-start mb-4 border-black border-r-2 border-b-2"
      />
    </div>
  );
}
