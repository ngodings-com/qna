import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Theme } from '@models/theme';
import { AppData } from 'src/app/app.data';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ThemeComponent implements OnInit {
  isShow = false;

  themes: Theme[] = [
    {
      theme: "Light",
      selected: false,
    },
    {
      theme: "Dark",
      selected: false,
    },
    {
      theme: "Cupcake",
      selected: false,
    },
    {
      theme: "Bumblebee",
      selected: false,
    },
    {
      theme: "Emerald",
      selected: false,
    },
    {
      theme: "Corporate",
      selected: false,
    },
    {
      theme: "Synthwave",
      selected: false,
    },
    {
      theme: "Retro",
      selected: false,
    },
    {
      theme: "Cyberpunk",
      selected: false,
    },
    {
      theme: "Valentine",
      selected: false,
    },
    {
      theme: "Halloween",
      selected: false,
    },
    {
      theme: "Garden",
      selected: false,
    },
    {
      theme: "Forest",
      selected: false,
    },
    {
      theme: "Aqua",
      selected: false,
    },
    {
      theme: "Lofi",
      selected: false,
    },
    {
      theme: "Pastel",
      selected: false,
    },
    {
      theme: "Fantasy",
      selected: false,
    },
    {
      theme: "Wireframe",
      selected: false,
    },
    {
      theme: "Black",
      selected: false,
    },
    {
      theme: "Luxury",
      selected: false,
    },
    {
      theme: "Dracula",
      selected: false,
    },
    {
      theme: "Cmyk",
      selected: false,
    },
    {
      theme: "Autumn",
      selected: false,
    },
    {
      theme: "Business",
      selected: false,
    },
    {
      theme: "Acid",
      selected: false,
    },
    {
      theme: "Lemonade",
      selected: false,
    },
    {
      theme: "Night",
      selected: false,
    },
    {
      theme: "Coffe",
      selected: false,
    },
    {
      theme: "Winter",
      selected: false,
    },
    {
      theme: "Ngodings",
      selected: false,
    },
  ];
  constructor(public appData: AppData) {

  }

  ngOnInit(): void {
    const findIndex = this.themes.findIndex((theme) => theme.theme == this.appData.theme);
    this.themes[findIndex].selected = true;
    this.themes = this.themes.sort((x, y) => {
      return (x.selected === y.selected) ? 0 : x.selected ? -1 : 1;
    });
  }

  onChangeTheme(theme: Theme) {
    this.themes.map((theme) => {
      theme.selected = false;
    });
    this.appData.theme = theme.theme;
    theme.selected = true;
  }
}
