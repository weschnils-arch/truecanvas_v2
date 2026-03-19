import { useEffect } from 'react';

export default function CareInstructionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F7F6F4] min-h-screen font-sans">
      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col items-center">
        <div className="text-center mb-32 max-w-4xl px-6">
          <h2 className="text-4xl md:text-5xl font-sans tracking-[0.2em] uppercase mb-12">
            Pflege deines neuen Tattoos
          </h2>
          <p className="font-serif italic text-2xl md:text-3xl text-charcoal/80 leading-relaxed uppercase">
            "Ein perfektes Ergebnis braucht die richtige Heilung."
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start w-full mb-40 overflow-hidden px-6">
          <div className="flex flex-col gap-8">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold border-b border-gold/20 pb-2">Tag 1 - 7</h4>
            <div className="font-serif text-charcoal/70 text-lg md:text-xl leading-relaxed">
              <p className="mb-6">
                Solange die Folie auf der Haut ist machst du gar nichts. Nichts. Überhaupt Nichts. Das ist eine der wichtigsten Pflegeempfehlungen überhaupt – überfordere deine Haut nicht.
              </p>
              <p className="mb-6">
                Sollte sich in den ersten Stunden eine störende Blase mit Wundflüssigkeit gebildet haben, dann ist das nicht schlimm. Das dickt durch die Verdunstung ein. Duschen ist mit der Membran ganz normal möglich.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold border-b border-gold/20 pb-2">Tag 8</h4>
            <div className="font-serif text-charcoal/70 text-lg md:text-xl leading-relaxed">
              <p className="mb-6">
                Nach 7 Tagen entfernst du die Membran, indem du sie an einer Ecke oder Kante anhebst und lauwarmes Wasser zwischen Haut und Folie laufen lässt und dann vorsichtig abziehst.
              </p>
              <p className="mb-6">
                Wasche die Haut mit warmen Wasser und PH-neutraler Seife mit sauberen, frisch gewaschenen Händen. Trockne die Haut anschließend mit einem Einwegtuch (Küchenrolle) tupfend ab.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold border-b border-gold/20 pb-2">Tag 8 - 22</h4>
            <div className="font-serif text-charcoal/70 text-lg md:text-xl leading-relaxed">
              <p className="mb-6">
                Bis etwa zwei Wochen nach dem Ablösen der Folie wiederholst du das hauchdünne Eincremen (ich wiederhole: mit sauberen, gewaschenen Händen) täglich 2-3 Mal.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-charcoal text-[#F7F6F4] w-full max-w-4xl p-16 mb-40 flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl tracking-[0.2em] uppercase mb-16 text-center">
            Was du tun oder lassen sollst…
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full font-serif text-lg md:text-xl">
            <li>
                <span className="text-gold block mb-2 uppercase text-[11px] tracking-[0.2em]">3 - 4 Wochen</span>
                Kein Schwimmbad, Meer oder Badewanne (Haut quillt auf).
            </li>
            <li>
                <span className="text-gold block mb-2 uppercase text-[11px] tracking-[0.2em]">Sonne</span>
                3-4 Wochen lang tabu! (Sonnenschutz ist danach Pflicht!).
            </li>
            <li>
                <span className="text-gold block mb-2 uppercase text-[11px] tracking-[0.2em]">Körperpflege</span>
                Keine Saunagänge, Dampfbäder oder Sport (Schwitzen vermeiden).
            </li>
            <li>
                <span className="text-gold block mb-2 uppercase text-[11px] tracking-[0.2em]">Produkte</span>
                Verwende nur im Studio erhältliche Aftercare Cremes.
            </li>
          </ul>
        </section>

        {/* Visit Button / Footer as seen in ref */}
        <div className="mt-12 text-center flex flex-col items-center gap-6">
          <p className="text-[11px] tracking-[0.2em] text-charcoal/70 uppercase">
            19 Weyringergasse, Vienna
          </p>
          <button className="btn-premium-dark">
            Visit
          </button>
        </div>
      </div>
    </div>
  );
}
