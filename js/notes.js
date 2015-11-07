$.preload( 'notes/note_0.jpg','notes/A0.jpg','notes/A1.jpg','notes/As0.jpg',
           'notes/As1.jpg','notes/As-1.jpg','notes/A-1.jpg','notes/Ab0.jpg',
           'notes/Ab1.jpg','notes/Ab-1.jpg','notes/B0.jpg','notes/B1.jpg',
           'notes/Bs0.jpg','notes/Bs1.jpg','notes/Bs-1.jpg','notes/Bb0.jpg',
           'notes/Bb1.jpg','notes/Bb-1.jpg','notes/C0.jpg','notes/C1.jpg',
           'notes/C2.jpg','notes/Cs0.jpg','notes/Cs1.jpg','notes/Cs2.jpg',
           'notes/Cb0.jpg','notes/Cb1.jpg','notes/Cb2.jpg','notes/D0.jpg',
           'notes/D1.jpg','notes/D2.jpg','notes/Ds0.jpg','notes/Ds1.jpg',
           'notes/Ds2.jpg','notes/Db0.jpg','notes/Db1.jpg','notes/Db2.jpg',
           'notes/E0.jpg','notes/E1.jpg','notes/E2.jpg','notes/Es0.jpg',
           'notes/Es1.jpg','notes/Es-1.jpg','notes/E-1.jpg','notes/Eb0.jpg',
           'notes/Eb1.jpg','notes/Eb2.jpg','notes/F0.jpg','notes/F1.jpg',
           'notes/Fs0.jpg','notes/Fs1.jpg','notes/Fs-1.jpg','notes/F-1.jpg',
           'notes/Fb0.jpg','notes/Fb1.jpg','notes/Fb-1.jpg','notes/G0.jpg',
           'notes/G1.jpg','notes/Gs0.jpg','notes/Gs1.jpg','notes/Gs-1.jpg',
           'notes/G-1.jpg','notes/Gb0.jpg','notes/Gb1.jpg','notes/Gb-1.jpg', 'notes/treble.jpg'
      );

var blank = "<img src='notes/note_0.jpg'>",e_1 = "<img src='notes/E-1.jpg'>",es_1 = "<img src='notes/Es-1.jpg'>",
    f_1 = "<img src='notes/F-1.jpg'>",fs_1 = "<img src='notes/Fs-1.jpg'>",fb_1 = "<img src='notes/Fb-1.jpg'>",
    g_1 = "<img src='notes/G-1.jpg'>",gs_1 = "<img src='notes/Gs-1.jpg'>",gb_1 = "<img src='notes/Gb-1.jpg'>",
    a_1 = "<img src='notes/A-1.jpg'>",as_1 = "<img src='notes/As-1.jpg'>",ab_1 = "<img src='notes/Ab-1.jpg'>",
    b_1 = "<img src='notes/B-1.jpg'>",bs_1 = "<img src='notes/Bs-1.jpg'>",bb_1 = "<img src='notes/Bb-1.jpg'>",
    c0 = "<img src='notes/C0.jpg'>",cs0 = "<img src='notes/Cs0.jpg'>",cb0 = "<img src='notes/Cb0.jpg'>",
    d0 = "<img src='notes/D0.jpg'>",ds0 = "<img src='notes/Ds0.jpg'>",db0 = "<img src='notes/Db0.jpg'>",
    e0 = "<img src='notes/E0.jpg'>",es0 = "<img src='notes/Es0.jpg'>",eb0 = "<img src='notes/Eb0.jpg'>",
    f0 = "<img src='notes/F0.jpg'>",fs0 = "<img src='notes/Fs0.jpg'>",fb0 = "<img src='notes/Fb0.jpg'>",
    g0 = "<img src='notes/G0.jpg'>",gs0 = "<img src='notes/Gs0.jpg'>",gb0 = "<img src='notes/Gb0.jpg'>",
    a0 = "<img src='notes/A0.jpg'>",as0 = "<img src='notes/As0.jpg'>",ab0 = "<img src='notes/Ab0.jpg'>",
    b0 = "<img src='notes/B0.jpg'>",bs0 = "<img src='notes/Bs0.jpg'>",bb0 = "<img src='notes/Bb0.jpg'>",
    c1 = "<img src='notes/C1.jpg'>",cs1 = "<img src='notes/Cs1.jpg'>",cb1 = "<img src='notes/Cb1.jpg'>",
    d1 = "<img src='notes/D1.jpg'>",ds1 = "<img src='notes/Ds1.jpg'>",db1 = "<img src='notes/Db1.jpg'>",
    e1 = "<img src='notes/E1.jpg'>",es1 = "<img src='notes/Es1.jpg'>",eb1 = "<img src='notes/Eb1.jpg'>",
    f1 = "<img src='notes/F1.jpg'>",fs1 = "<img src='notes/Fs1.jpg'>",fb1 = "<img src='notes/Fb1.jpg'>",
    g1 = "<img src='notes/G1.jpg'>",gs1 = "<img src='notes/Gs1.jpg'>",gb1 = "<img src='notes/Gb1.jpg'>",
    a1 = "<img src='notes/A1.jpg'>",as1 = "<img src='notes/As1.jpg'>",ab1 = "<img src='notes/Ab1.jpg'>",
    b1 = "<img src='notes/B1.jpg'>",bs1 = "<img src='notes/Bs1.jpg'>",bb1 = "<img src='notes/Bb1.jpg'>",
    c2 = "<img src='notes/C2.jpg'>",cs2 = "<img src='notes/Cs2.jpg'>",cb2 = "<img src='notes/Cb2.jpg'>",
    d2 = "<img src='notes/D2.jpg'>",ds2 = "<img src='notes/Ds2.jpg'>",db2 = "<img src='notes/Db2.jpg'>",
    e2 = "<img src='notes/E2.jpg'>",eb2 = "<img src='notes/Eb2.jpg'>";


var thisisthekey = {
  cbMajoroneOctave: [cb0, db0, eb0, fb0, gb0, ab0, bb0, cb1],
  cbMajortwoOctave: [cb0, db0, eb0, fb0, gb0, ab0, bb0, cb1, db1, eb1, fb1, gb1, ab1, bb1, cb2],
  cMajoroneOctave: [c0, d0, e0, f0, g0, a0, b0, c1],
  cMajortwoOctave: [c0, d0, e0, f0, g0, a0, b0, c1, d1, e1, f1, g1, a1, b1, c2],
  csMajoroneOctave: [cs0, ds0, es0, fs0, gs0, as0, bs0, cs1],
  csMajortwoOctave: [cs0, ds0, es0, fs0, gs0, as0, bs0, cs1, ds1, es1, fs1, gs1, as1, bs1, cs2],
  dbMajoroneOctave: [db0, eb0, f0, gb0, ab0, bb0, c1, db1],
  dbMajortwoOctave: [db0, eb0, f0, gb0, ab0, bb0, c1, db1, eb1, f1, gb1, ab1, bb1, c2, db2],
  dMajoroneOctave: [d0, e0, fs0, g0, a0, b0, cs1, d1],
  dMajortwoOctave: [d0, e0, fs0, g0, a0, b0, cs1, d1, e1, fs1, g1, a1, b1, cs2, d2],
  ebMajoroneOctave: [eb0, f0, g0, ab0, bb0, c1, d1, eb1],
  ebMajortwoOctave: [eb0, f0, g0, ab0, bb0, c1, d1, eb1, f1, g1, ab1, bb1, c2, d2, eb2],
  eMajoroneOctave: [e_1, fs_1, gs_1, a_1, b_1, cs0, ds0, e0],
  eMajortwoOctave: [e_1, fs_1, gs_1, a_1, b_1, cs0, ds0, e0, fs0, gs0, a0, b0, cs1, ds1, e1],
  fMajoroneOctave: [f_1, g_1, a_1, bb_1, c0, d0, e0, f0],
  fMajortwoOctave: [f_1, g_1, a_1, bb_1, c0, d0, e0, f0, g0, a0, bb0, c1, d1, e1, f1],
  fsMajoroneOctave: [fs_1, gs_1, as_1, b_1, cs0, ds0, es0, fs0],
  fsMajortwoOctave: [fs_1, gs_1, as_1, b_1, cs0, ds0, es0, fs0, gs0, as0, b0, cs1, ds1, es1, fs1],
  gbMajoroneOctave: [gb_1, ab_1, bb_1, cb0, db0, eb0, f0, gb0],
  gbMajortwoOctave: [gb_1, ab_1, bb_1, cb0, db0, eb0, f0, gb0, ab0, bb0, cb1, db1, eb1, f1, gb1],
  gMajoroneOctave: [g_1, a_1, b_1, c0, d0, e0, fs0, g0],
  gMajortwoOctave: [g_1, a_1, b_1, c0, d0, e0, fs0, g0, a0, b0, c1, d1, e1, fs1, g1],
  abMajoroneOctave: [ab_1, bb_1, c0, db0, eb0, f0, g0, ab0],
  abMajortwoOctave: [ab_1, bb_1, c0, db0, eb0, f0, g0, ab0, bb0, c1, db1, eb1, f1, g1, ab1],
  aMajoroneOctave: [a_1, b_1, cs0, d0, e0, fs0, gs0, a0],
  aMajortwoOctave: [a_1, b_1, cs0, d0, e0, fs0, gs0, a0, b0, cs1, d1, e1, fs1, gs1, a1],
  bbMajoroneOctave: [bb_1, c0, d0, eb0, f0, g0, a0, bb0],
  bbMajortwoOctave: [bb_1, c0, d0, eb0, f0, g0, a0, bb0, c1, d1, eb1, f1, g1, a1, bb1],
  bMajoroneOctave: [b_1, cs0, ds0, e0, fs0, gs0, as0, b0],
  bMajortwoOctave: [b_1, cs0, ds0, e0, fs0, gs0, as0, b0, cs1, ds1, e1, fs1, gs1, as1, b1],
  cMinoroneOctave: [c0, d0, eb0, f0, g0, ab0, bb0, c1],
  cMinortwoOctave: [c0, d0, eb0, f0, g0, ab0, bb0, c1, d1, eb1, f1, g1, ab1, bb1, c2],
  csMinoroneOctave: [cs0, ds0, e0, fs0, gs0, a0, b0, cs1],
  csMinortwoOctave: [cs0, ds0, e0, fs0, gs0, a0, b0, cs1, ds1, e1, fs1, gs1, a1, b1, cs2],
  dMinoroneOctave: [d0, e0, f0, g0, a0, bb0, c1, d1],
  dMinortwoOctave: [d0, e0, f0, g0, a0, bb0, c1, d1, e1, f1, g1, a1, bb1, c2, d2],
  dsMinoroneOctave: [ds0, es0, fs0, gs0, as0, b0, cs1, ds1],
  dsMinortwoOctave: [ds0, es0, fs0, gs0, as0, b0, cs1, ds1, es1, fs1, gs1, as1, b1, cs2, ds2],
  ebMinoroneOctave: [eb0, f0, gb0, ab0, bb0, cb1, db1, eb1],
  ebMinortwoOctave: [eb0, f0, gb0, ab0, bb0, cb1, db1, eb1, f1, gb1, ab1, bb1, cb2, db2, eb2],
  eMinoroneOctave: [e_1, fs_1, g_1, a_1, b_1, c0, d0, e0],
  eMinortwoOctave: [e_1, fs_1, g_1, a_1, b_1, c0, d0, e0, fs0, g0, a0, b0, c1, d1, e1],
  fMinoroneOctave: [f_1, g_1, ab_1, bb_1, c0, db0, eb0, f0],
  fMinortwoOctave: [f_1, g_1, ab_1, bb_1, c0, db0, eb0, f0, g0, ab0, bb0, c1, db1, eb1, f1],
  fsMinoroneOctave: [fs_1, gs_1, a_1, b_1, cs0, d0, e0, fs0],
  fsMinortwoOctave: [fs_1, gs_1, a_1, b_1, cs0, d0, e0, fs0, gs0, a0, b0, cs1, d1, e1, fs1],
  gMinoroneOctave: [g_1, a_1, bb_1, c0, d0, eb0, f0, g0],
  gMinortwoOctave: [g_1, a_1, bb_1, c0, d0, eb0, f0, g0, a0, bb0, c1, d1, eb1, f1, g1],
  gsMinoroneOctave: [gs_1, as_1, b_1, cs0, ds0, e0, fs0, gs0],
  gsMinortwoOctave: [gs_1, as_1, b_1, cs0, ds0, e0, fs0, gs0, as0, b0, cs1, ds1, e1, fs1, gs1],
  abMinoroneOctave: [ab_1, bb_1, cb0, db0, eb0, fb0, gb0, ab0],
  abMinortwoOctave: [ab_1, bb_1, cb0, db0, eb0, fb0, gb0, ab0, bb0, cb1, db1, eb1, fb1, gb1, ab1],
  aMinoroneOctave: [a_1, b_1, c0, d0, e0, f0, g0, a0],
  aMinortwoOctave: [a_1, b_1, c0, d0, e0, f0, g0, a0, b0, c1, d1, e1, f1, g1, a1],
  asMinoroneOctave: [as_1, bs_1, cs0, ds0, es0, fs0, gs0, as0],
  asMinortwoOctave: [as_1, bs_1, cs0, ds0, es0, fs0, gs0, as0, bs0, cs1, ds1, es1, fs1, gs1, as1],
  bbMinoroneOctave: [bb_1, c0, db0, eb0, f0, gb0, ab0, bb0],
  bbMinortwoOctave: [bb_1, c0, db0, eb0, f0, gb0, ab0, bb0, c1, db1, eb1, f1, gb1, ab1, bb1],
  bMinoroneOctave: [b_1, cs0, d0, e0, fs0, g0, a0, b0],
  bMinortwoOctave: [b_1, cs0, d0, e0, fs0, g0, a0, b0, cs1, d1, e1, fs1, g1, a1, b1]
}
