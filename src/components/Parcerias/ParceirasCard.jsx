export default function ParceirasCard({ img }) {
  return (
    <div className="bg-white p-6 rounded-lg  h-60">
      <img
        src={img}
        className="w-full h-full rounded-full flex items-center justify-start mb-4 border-black border-r-2 border-b-2"
      />
    </div>
  );
}
