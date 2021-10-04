import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
import "./Note.css";

export default function NotesContainer({ selectedTab }) {
  const noteSliceIds = useSelector(
    (state) => state.notes.byStatus[selectedTab]
  );
  const pinnedNotesIds = useSelector((state) => state.notes.byStatus.pinned);

  return (
    <>
      <section>
        <h3>Pinned Notes</h3>
        {pinnedNotesIds.length > 0 && (
          <>
            <title>Pinned</title>
            {pinnedNotesIds.map((noteId) => {
              return <Note key={noteId} noteId={noteId} />;
            })}
          </>
        )}
      </section>
      <section>
        <h3>Notes Container</h3>
        {noteSliceIds.length > 0 && (
          <>
            <title>{selectedTab}</title>
            {noteSliceIds.map((noteId) => (
              <Note key={noteId} noteId={noteId} />
            ))}
          </>
        )}
      </section>
    </>
  );
}