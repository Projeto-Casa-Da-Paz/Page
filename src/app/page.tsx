import { Card } from "@/components/Card";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Menu />

      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
          height: '100vh'
        }}
      >
        <h2> Página Inicial </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            //Ajuste auto de itens= wrap
          }}
        >
          {/* Card */}

        </div>
      </div>

      <Footer />

    </>
  );
}
