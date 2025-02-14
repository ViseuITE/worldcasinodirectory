var ActiveCard  = 0;
var FoldedHand  = [false, false, false, false, false, false, false, false, false, false];
var PlayerCard  = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]];
var StreetCard  = [-1, -1, -1, -1, -1];
var Result      = { Summary : [], Details : [] };
var Help        = 0;
var Used        = new Array(52);

function Obj(i)
{
    return document.getElementById(i);
}

function Calculate()
{
    ClearOutput();

    var p0 = (PlayerCard[0][0] >= 0) && (PlayerCard[0][1] >= 0); if ((!p0) && ((PlayerCard[0][0] >= 0) || (PlayerCard[0][1] >= 0))) { return; }
    var p1 = (PlayerCard[1][0] >= 0) && (PlayerCard[1][1] >= 0); if ((!p1) && ((PlayerCard[1][0] >= 0) || (PlayerCard[1][1] >= 0))) { return; }
    var p2 = (PlayerCard[2][0] >= 0) && (PlayerCard[2][1] >= 0); if ((!p2) && ((PlayerCard[2][0] >= 0) || (PlayerCard[2][1] >= 0))) { return; }
    var p3 = (PlayerCard[3][0] >= 0) && (PlayerCard[3][1] >= 0); if ((!p3) && ((PlayerCard[3][0] >= 0) || (PlayerCard[3][1] >= 0))) { return; }
    var p4 = (PlayerCard[4][0] >= 0) && (PlayerCard[4][1] >= 0); if ((!p4) && ((PlayerCard[4][0] >= 0) || (PlayerCard[4][1] >= 0))) { return; }
    var p5 = (PlayerCard[5][0] >= 0) && (PlayerCard[5][1] >= 0); if ((!p5) && ((PlayerCard[5][0] >= 0) || (PlayerCard[5][1] >= 0))) { return; }
    var p6 = (PlayerCard[6][0] >= 0) && (PlayerCard[6][1] >= 0); if ((!p6) && ((PlayerCard[6][0] >= 0) || (PlayerCard[6][1] >= 0))) { return; }
    var p7 = (PlayerCard[7][0] >= 0) && (PlayerCard[7][1] >= 0); if ((!p7) && ((PlayerCard[7][0] >= 0) || (PlayerCard[7][1] >= 0))) { return; }
    var p8 = (PlayerCard[8][0] >= 0) && (PlayerCard[8][1] >= 0); if ((!p8) && ((PlayerCard[8][0] >= 0) || (PlayerCard[8][1] >= 0))) { return; }
    var p9 = (PlayerCard[9][0] >= 0) && (PlayerCard[9][1] >= 0); if ((!p9) && ((PlayerCard[9][0] >= 0) || (PlayerCard[9][1] >= 0))) { return; }

    var f0 = (StreetCard[0] >= 0);
    var f1 = (StreetCard[1] >= 0);
    var f2 = (StreetCard[2] >= 0);
    var f3 = (StreetCard[3] >= 0);
    var f4 = (StreetCard[4] >= 0);

    if ((f0 || f1 || f2) && (!(f0 && f1 && f2))) { return; }
    if ((f3 || f4)       && (!(f0 && f1 && f2))) { return; }
    if ( f4              && (!(f3            ))) { return; }

    var hands   = (p0 ? 1 : 0)
                + (p1 ? 1 : 0)
                + (p2 ? 1 : 0)
                + (p3 ? 1 : 0)
                + (p4 ? 1 : 0)
                + (p5 ? 1 : 0)
                + (p6 ? 1 : 0)
                + (p7 ? 1 : 0)
                + (p8 ? 1 : 0)
                + (p9 ? 1 : 0);

    var players = (p0 && (!FoldedHand[0]) ? 1 : 0)
                + (p1 && (!FoldedHand[1]) ? 1 : 0)
                + (p2 && (!FoldedHand[2]) ? 1 : 0)
                + (p3 && (!FoldedHand[3]) ? 1 : 0)
                + (p4 && (!FoldedHand[4]) ? 1 : 0)
                + (p5 && (!FoldedHand[5]) ? 1 : 0)
                + (p6 && (!FoldedHand[6]) ? 1 : 0)
                + (p7 && (!FoldedHand[7]) ? 1 : 0)
                + (p8 && (!FoldedHand[8]) ? 1 : 0)
                + (p9 && (!FoldedHand[9]) ? 1 : 0);

    if (players < 2) { return; }

    var folded_cards = []; var fi = 0;
    var player_cards = []; var pi = 0;

    if (p0) { if (FoldedHand[0]) { folded_cards[fi++] = PlayerCard[0][0]; folded_cards[fi++] = PlayerCard[0][1]; } else { player_cards[pi++] = [PlayerCard[0][0], PlayerCard[0][1]]; } }
    if (p1) { if (FoldedHand[1]) { folded_cards[fi++] = PlayerCard[1][0]; folded_cards[fi++] = PlayerCard[1][1]; } else { player_cards[pi++] = [PlayerCard[1][0], PlayerCard[1][1]]; } }
    if (p2) { if (FoldedHand[2]) { folded_cards[fi++] = PlayerCard[2][0]; folded_cards[fi++] = PlayerCard[2][1]; } else { player_cards[pi++] = [PlayerCard[2][0], PlayerCard[2][1]]; } }
    if (p3) { if (FoldedHand[3]) { folded_cards[fi++] = PlayerCard[3][0]; folded_cards[fi++] = PlayerCard[3][1]; } else { player_cards[pi++] = [PlayerCard[3][0], PlayerCard[3][1]]; } }
    if (p4) { if (FoldedHand[4]) { folded_cards[fi++] = PlayerCard[4][0]; folded_cards[fi++] = PlayerCard[4][1]; } else { player_cards[pi++] = [PlayerCard[4][0], PlayerCard[4][1]]; } }
    if (p5) { if (FoldedHand[5]) { folded_cards[fi++] = PlayerCard[5][0]; folded_cards[fi++] = PlayerCard[5][1]; } else { player_cards[pi++] = [PlayerCard[5][0], PlayerCard[5][1]]; } }
    if (p6) { if (FoldedHand[6]) { folded_cards[fi++] = PlayerCard[6][0]; folded_cards[fi++] = PlayerCard[6][1]; } else { player_cards[pi++] = [PlayerCard[6][0], PlayerCard[6][1]]; } }
    if (p7) { if (FoldedHand[7]) { folded_cards[fi++] = PlayerCard[7][0]; folded_cards[fi++] = PlayerCard[7][1]; } else { player_cards[pi++] = [PlayerCard[7][0], PlayerCard[7][1]]; } }
    if (p8) { if (FoldedHand[8]) { folded_cards[fi++] = PlayerCard[8][0]; folded_cards[fi++] = PlayerCard[8][1]; } else { player_cards[pi++] = [PlayerCard[8][0], PlayerCard[8][1]]; } }
    if (p9) { if (FoldedHand[9]) { folded_cards[fi++] = PlayerCard[9][0]; folded_cards[fi++] = PlayerCard[9][1]; } else { player_cards[pi++] = [PlayerCard[9][0], PlayerCard[9][1]]; } }

    var community_cards = [];

    if (f0 && f1 && f2 && f3 && f4) { community_cards = [StreetCard[0], StreetCard[1], StreetCard[2], StreetCard[3], StreetCard[4]]; } else
    if (f0 && f1 && f2 && f3)       { community_cards = [StreetCard[0], StreetCard[1], StreetCard[2], StreetCard[3]];                } else
    if (f0 && f1 && f2)             { community_cards = [StreetCard[0], StreetCard[1], StreetCard[2]];                               } else
                                    { community_cards = [];                                                                          }

    var cs = "";
    var bs = "";
    var fs = "";

    for (var x = 0; x <    player_cards.length; x++) { if (x > 0) { cs += ","; } cs +=    player_cards[x].toString(10); }
    for (var x = 0; x < community_cards.length; x++) { if (x > 0) { bs += ","; } bs += community_cards[x].toString(10); }
    for (var x = 0; x <    folded_cards.length; x++) { if (x > 0) { fs += ","; } fs +=    folded_cards[x].toString(10); }

    $.ajax
    (
        "/calculators-js/texas-hold-em/calculate/",

        {
            async       : true,
            data        : { p : players, c : cs, b : bs, f : fs },
            dataType    : "json",
            error       : AjaxError,
            success     : FinishCalc,
            timeout     : 2000,
            type        : "GET"
        }
    );
}

function AjaxError(jqXHR, textStatus, errorThrown)
{
}

function FinishCalc(data, textStatus, jqXHR)
{
    Result = data;

    if (Result.Error) { return; }

    var p0 = (PlayerCard[0][0] >= 0) && (PlayerCard[0][1] >= 0);
    var p1 = (PlayerCard[1][0] >= 0) && (PlayerCard[1][1] >= 0);
    var p2 = (PlayerCard[2][0] >= 0) && (PlayerCard[2][1] >= 0);
    var p3 = (PlayerCard[3][0] >= 0) && (PlayerCard[3][1] >= 0);
    var p4 = (PlayerCard[4][0] >= 0) && (PlayerCard[4][1] >= 0);
    var p5 = (PlayerCard[5][0] >= 0) && (PlayerCard[5][1] >= 0);
    var p6 = (PlayerCard[6][0] >= 0) && (PlayerCard[6][1] >= 0);
    var p7 = (PlayerCard[7][0] >= 0) && (PlayerCard[7][1] >= 0);
    var p8 = (PlayerCard[8][0] >= 0) && (PlayerCard[8][1] >= 0);
    var p9 = (PlayerCard[9][0] >= 0) && (PlayerCard[9][1] >= 0);

    var i = 0;

    if (p0 && (!FoldedHand[0])) { Obj("result0").innerHTML = Result.Summary[i]; Obj("result0").style.display = "block"; i++; } else { Obj("result0").innerHTML = ""; Obj("result0").style.display = "none"; }
    if (p1 && (!FoldedHand[1])) { Obj("result1").innerHTML = Result.Summary[i]; Obj("result1").style.display = "block"; i++; } else { Obj("result1").innerHTML = ""; Obj("result1").style.display = "none"; }
    if (p2 && (!FoldedHand[2])) { Obj("result2").innerHTML = Result.Summary[i]; Obj("result2").style.display = "block"; i++; } else { Obj("result2").innerHTML = ""; Obj("result2").style.display = "none"; }
    if (p3 && (!FoldedHand[3])) { Obj("result3").innerHTML = Result.Summary[i]; Obj("result3").style.display = "block"; i++; } else { Obj("result3").innerHTML = ""; Obj("result3").style.display = "none"; }
    if (p4 && (!FoldedHand[4])) { Obj("result4").innerHTML = Result.Summary[i]; Obj("result4").style.display = "block"; i++; } else { Obj("result4").innerHTML = ""; Obj("result4").style.display = "none"; }
    if (p5 && (!FoldedHand[5])) { Obj("result5").innerHTML = Result.Summary[i]; Obj("result5").style.display = "block"; i++; } else { Obj("result5").innerHTML = ""; Obj("result5").style.display = "none"; }
    if (p6 && (!FoldedHand[6])) { Obj("result6").innerHTML = Result.Summary[i]; Obj("result6").style.display = "block"; i++; } else { Obj("result6").innerHTML = ""; Obj("result6").style.display = "none"; }
    if (p7 && (!FoldedHand[7])) { Obj("result7").innerHTML = Result.Summary[i]; Obj("result7").style.display = "block"; i++; } else { Obj("result7").innerHTML = ""; Obj("result7").style.display = "none"; }
    if (p8 && (!FoldedHand[8])) { Obj("result8").innerHTML = Result.Summary[i]; Obj("result8").style.display = "block"; i++; } else { Obj("result8").innerHTML = ""; Obj("result8").style.display = "none"; }
    if (p9 && (!FoldedHand[9])) { Obj("result9").innerHTML = Result.Summary[i]; Obj("result9").style.display = "block"; i++; } else { Obj("result9").innerHTML = ""; Obj("result9").style.display = "none"; }
}

function ClearOutput()
{
    HideDetails();

    for (var x = 0; x < 10; x++)
    {
        Obj("result" + x).innerHTML     = "";
        Obj("result" + x).style.display = "none";
    }
}

function HideDetails()
{
    Obj("details").innerHTML     = "";
    Obj("details").style.display = "none";
}

function NewHand()
{
    ClearOutput();
    Reset();
    ActiveCard = 0;
    Update();
}

function RandomScenario()
{
    NewHand();

    var p;  // number of active players
    var f;  // number of folded players
    var s;  // betting round (street)

    var i0 = Obj("random0").selectedIndex;
    var i1 = Obj("random1").selectedIndex;
    var i2 = Obj("random2").selectedIndex;

    var r0 = (i0 == 0);
    var r1 = (i1 == 0);
    var r2 = (i2 == 0);

    if (r0 && r1)
    {
        p = [2, 3, 4, 5, 6, 7, 8, 9, 10][Math.floor(Math.random() * 9)];
        f = Math.floor(Math.random() * (10 - p));
    }
    else if (r0)
    {
        f = i1 - 1;
        p = [2, 3, 4, 5, 6, 7, 8][Math.floor(Math.random() * (8 - f))];
    }
    else if (r1)
    {
        p = i0 + 1;
        f = Math.floor(Math.random() * (10 - p));
    }
    else
    {
        p = i0 + 1;
        f = i1 - 1;

        if ((p + f) > 10)
        {
            alert("The number of active players and the number of folded players cannot exceed 10.");
            return;
        }
    }

    switch (Obj("random2").selectedIndex)
    {
        case 0: s = [0, 3, 4, 5][Math.floor(Math.random() * 4)]; break;
        case 1: s = 0; break;
        case 2: s = 3; break;
        case 3: s = 4; break;
        case 4: s = 5; break;
    }

    var deck = [];

    for (var x = 0; x < 52; x++)
    {
        deck[x] = x;
    }

    for (var x = 51; x > 0; x--)
    {
        var r = Math.floor(Math.random() * x);

        deck[x] ^= deck[r];
        deck[r] ^= deck[x];
        deck[x] ^= deck[r];
    }

    var pos = 0;

    for (var x = 0; x < p; x++)
    {
        PlayerCard[x][0] = deck[pos++]; Used[PlayerCard[x][0]] = true;
        PlayerCard[x][1] = deck[pos++]; Used[PlayerCard[x][1]] = true;
    }

    for (var x = 0; x < f; x++)
    {
        FoldedHand[p + x]    = true;
        PlayerCard[p + x][0] = deck[pos++]; Used[PlayerCard[p + x][0]] = true;
        PlayerCard[p + x][1] = deck[pos++]; Used[PlayerCard[p + x][1]] = true;
    }

    for (var x = 0; x < s; x++)
    {
        StreetCard[x] = deck[pos++]; Used[StreetCard[x]] = true;
    }

    Update(true);
}

function Reset()
{
    for (var x = 0; x < 52; x++)
    {
        Used[x] = false;
    }

    FoldedHand = [false, false, false, false, false, false, false, false, false, false];
    PlayerCard = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]];
    StreetCard = [-1, -1, -1, -1, -1];
}

function ReturnCard(n)
{
    var calc = false;

    if ((n < 20) && (PlayerCard[n >> 1][n & 1] >= 0))
    {
        calc = Used[PlayerCard[n >> 1][n & 1]];
        Used[PlayerCard[n >> 1][n & 1]] = false;
             PlayerCard[n >> 1][n & 1]  = -1;
    }
    else if (StreetCard[n - 20] >= 0)
    {
        calc = Used[StreetCard[n - 20]];
        Used[StreetCard[n - 20]] = false;
             StreetCard[n - 20]  = -1;
    }

    ActiveCard = n;

    Update(calc);
}

function SelectCard(n)
{
    if (ActiveCard < 20)
    {
        if (PlayerCard[ActiveCard >> 1][ActiveCard & 1] >= 0)
        {
            Used[PlayerCard[ActiveCard >> 1][ActiveCard & 1]] = false;
            PlayerCard[ActiveCard >> 1][ActiveCard & 1] = -1;
        }
    }
    else
    {
        if (StreetCard[ActiveCard - 20] >= 0)
        {
            Used[StreetCard[ActiveCard - 20]] = false;
            StreetCard[ActiveCard - 20] = -1;
        }
    }

    if (!Used[n])
    {
        if (ActiveCard < 20)
        {
            PlayerCard[ActiveCard >> 1][ActiveCard & 1] = n;
        }
        else
        {
            StreetCard[ActiveCard - 20] = n;
        }

        Used[n] = true;

        if (ActiveCard == 3)
        {
            ActiveCard = 20;
        }
        else
        {
            ActiveCard = (ActiveCard + 1) % 25;
        }
    }

    Update(true);
}

function ShowDetails(n)
{
    if (Result.Error) { return; }

    var i = 0;

    for (var x = 0; x < n; x++)
    {
        if ((PlayerCard[x][0] >= 0) && (PlayerCard[x][1] >= 0))
        {
            i++;
        }
    }

    Obj("details").innerHTML     = Result.Details[i];
    Obj("details").style.display = "block";
}

function ToggleFold(n)
{
    FoldedHand[n] = !FoldedHand[n];
    ActiveCard = n << 1;
    Update(true);
}

function ToggleHelp()
{
    Help ^= 1;
    Obj("help").style.display = (Help ? "block" : "none");
}

function Update(calc)
{
    for (var x = 0; x < 52; x++)
    {
        Obj("sm" + x).style.display = (Used[x] ? "none" : "block");
    }

    for (var p = 0; p < 10; p++)
    {
        for (var c = 0; c < 2; c++)
        {
            Obj("hole"   + p + c).style.backgroundPosition = (PlayerCard[p][c] >= 0              ? (PlayerCard[p][c] * -35) + "px 0" : "36px 55px");
            Obj("hilite" + p + c).style.display            = (ActiveCard       == ((p << 1) + c) ? "block"                           : "none");
        }
    }

    for (var f = 0; f < 5; f++)
    {
        Obj("flop"    + f).style.backgroundPosition = (StreetCard[f] >= 0        ? (StreetCard[f] * -35) + "px 0" : "36px 55px");
        Obj("hilitef" + f).style.display            = (ActiveCard    == (f + 20) ? "block"                        : "none");
    }

    for (var h = 0; h < 10; h++)
    {
        var s = (FoldedHand[h] ? "block" : "none");

        Obj("fold_chk_" + h)      .style.display = s;
        Obj("fold_xxx_" + h + "0").style.display = s;
        Obj("fold_xxx_" + h + "1").style.display = s;
    }

    if (calc)
    {
        setTimeout(Calculate, 1);
    }
}

try { var OnLoad = window.onload; } catch (e) { }

window.onload = function()
{
    try { OnLoad(); } catch (e) { }

    Reset();
    Update(false);
};

