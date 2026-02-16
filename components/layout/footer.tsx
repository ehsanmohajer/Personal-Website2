export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex h-16 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ehsan Mohajer, All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
