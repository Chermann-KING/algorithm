export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-6 md:py-0">
      <div className="container flex flex-col items-center gap-4 md:h-24 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Algorithm. Tous droits réservés.
        </p>

        <p className="text-sm text-muted-foreground text-center md:text-right">
          <span className="block md:inline">
            Developpée par{" "}
            <a
              href="https://github.com/Chermann-KING"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
            >
              Chermann KING
            </a>
          </span>
          <span className="block md:inline md:before:content-['.'] md:before:mx-2">
            Code source sur{" "}
            <a
              href="https://github.com/Chermann-KING/algorithm"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
            >
              GitHub
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
