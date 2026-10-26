import LabNote from "../_shared/LabNote";
import PhotoAccordion from "../_shared/PhotoAccordion";
import { photos } from "../_shared/placeholders";

export default function PhotoAccordionPrototype() {
  return (
    <main className="max-w-[640px]">
      <LabNote title="PHOTO STRIP" source="bencho.dev “image accordion”">
        a row of slices. the one you hover (or tap) opens up into a full frame
        in color; the rest stay grey.
      </LabNote>

      <PhotoAccordion photos={photos.slice(0, 6)} />

      <div className="mt-[4rem] text-[12px] text-light-description">
        shorter, with fewer photos:
      </div>
      <div className="mt-[20px]">
        <PhotoAccordion photos={photos.slice(6, 10)} height={240} />
      </div>
    </main>
  );
}
