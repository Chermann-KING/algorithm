export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Developpée par{" "}
            <a
              href="https://github.com/Chermann-KING"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Chermann KING
            </a>
            . Le code source est disponible sur{" "}
            <a
              href="https://github.com/Chermann-KING"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
