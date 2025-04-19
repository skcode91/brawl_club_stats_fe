import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const page = () => {
  return (
    <Box sx={{ padding: 4, maxWidth: "800px", margin: "0 auto" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Regulamin LTX TEAM
      </Typography>

      <Typography variant="h6" gutterBottom>
        Posiadamy jeden główny klub i trzy akademie:
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="LTX TEAM - od 70k" />
        </ListItem>
        <ListItem>
          <ListItemText primary="LTX TEAM - A - od 55k" />
        </ListItem>
        <ListItem>
          <ListItemText primary="LTX TEAM - B - od 45k" />
        </ListItem>
        <ListItem>
          <ListItemText primary="LTX TEAM - C - od 30k" />
        </ListItem>
      </List>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h6" gutterBottom>
        Czego wymagamy?
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="- Systematycznego wbijania minimum 400 puszek/10 dni" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Brania udziału w wydarzeniach" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Bycia aktywnym" />
        </ListItem>
      </List>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h6" gutterBottom>
        1. Główne zasady:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="- Nie przeklinamy, a jeśli już się zdarzy, to z umiarem" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Nie robimy specjalnie spamu" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Nie wyzywamy się, itp. (głównie takie same zasady jak na każdej grupie)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Tylko admini mogą używać funkcji oznaczania @wszystkich" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Jeśli wiesz, że będziesz nieaktywny, daj znać Administracji" />
        </ListItem>
      </List>
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        ‼️ NIE STOSOWANIE SIĘ DO ZASAD = USUNIĘCIE Z GRUPY ‼️
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h6" gutterBottom>
        2. Co do klubów:
      </Typography>
      <Typography>
        Każdy ma szansę dostać się do głównego klubu (to już zależy od osoby
        zarządzającej wszystkim). Jesteś nieaktywny, jesteś w akademii A, i nie
        dasz powodu, to mamy możliwość przeniesienia takiej osoby do akademii B.
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h6" gutterBottom>
        3. Co do klubu:
      </Typography>
      <Typography>
        Głównie nie piszemy w nim, tylko zazwyczaj pytamy się nowych osób, jak
        mają na imię i nazwisko, żeby dodać je do grupy na Messengerze (dotyczy
        trzech klubów).
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h6" gutterBottom>
        4. Co do Mega Świni:
      </Typography>
      <Typography>
        Co tu dużo pisać, trzeba grać. Nie grasz? No to nie licz, że zostaniesz
        dłużej w klubie. Codziennie ktoś będzie sprawdzał i przypominał osobom,
        które nie rozegrały ani jednego biletu.
      </Typography>
      <Typography>
        Chcesz 20/20 starr dropów? To graj, a nie liczysz tylko na innych!
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h6" gutterBottom>
        5. Mamy inne grupy:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="LTX TEAM Ogłoszenia" />
        </ListItem>
        <ListItem>
          <ListItemText primary="LTX TEAM Sparingi i Minigry" />
        </ListItem>
      </List>

      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        Co do grupy LTX TEAM Ogłoszenia, nikt nie ma prawa tam pisać oprócz osób
        zarządzających klubami. Jedynie co możecie robić, to dawać reakcje pod
        wiadomościami.
      </Typography>

      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        Co do LTX TEAM Sparingi i Minigry, projekt tymczasowo zamknięty, kiedyś
        może zostanie przywrócony.
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h6" gutterBottom>
        6. Mamy także dwie poboczne grupy:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Grupa sojuszu klubowego (grupa z innymi klubami, nie tylko LTX TEAM)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="LTX TEAM Meme (grupa związana z memami itp.)" />
        </ListItem>
      </List>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h6" gutterBottom>
        7. Mamy możliwość przeniesienia osoby z mniejszymi pucharkami:
      </Typography>
      <Typography>
        Możliwość przeniesienia osoby z akademii A do B lub z A do głównego
        klubu, żeby zrobić roszady i doprowadzić do tego, że osoba z wyższą
        ilością pucharków dołączy do klubu głównego.
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h6" gutterBottom>
        Jakieś pytania?
      </Typography>
      <Typography>
        Proszę się kierować do osób zarządzających klubami.
      </Typography>
    </Box>
  );
};

export default page;
