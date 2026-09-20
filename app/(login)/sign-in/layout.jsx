
export default function LoginLayout({ children }) {
  return (
    <div>
        <h1 className="row text-2xl font-bold">Login Header</h1>
        
        <div className="row mt-10 mb-10">
          {children}
        </div>
      
        <h1 className="row text-xl font-bold">Login Footer</h1>
    </div>
  );
}