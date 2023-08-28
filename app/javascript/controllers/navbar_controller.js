import { Controller } from "@hotwired/stimulus"
import { useClickOutside } from 'stimulus-use'

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["content"]
  connect() {
    useClickOutside(this)
    this.close()
  }

  clickOutside(event) {
    this.close()
  }

  closeWithKeyboard(event) {
    if (event.key === "Escape") {
      this.close()
    }
  }

  closeOnBigScreen(event) {
    if (window.innerWidth > 768) {
      this.close()
    }
  }

  toggle() {
    if (this.contentTarget.classList.contains('hidden')) {
      this.open()
    } else {
      this.close()
    }
  }

  open() {
    this.contentTarget.classList.remove("hidden")

    // blur main content
    let main = document.querySelector("main")
    main.classList.add("blur")

    // disable main content scrolling
    document.body.classList.add("overflow-hidden")
  }

  close() {
    this.contentTarget.classList.add("hidden")

    // unblur main content
    let main = document.querySelector("main")
    main.classList.remove("blur")

    // enable main content scrolling
    document.body.classList.add("overflow-hidden")
  }
}
