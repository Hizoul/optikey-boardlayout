const exampleXml =  `<Keyboard>
<Name>OptiKey-BoardMaker</Name>
<Height>40%</Height>
<SymbolMargin>1</SymbolMargin>
<BorderThickness>0,0,0,0</BorderThickness>
<DockSize>Full</DockSize>
<Position>Top</Position>
<Width>100%</Width>
<HorizontalOffset>0</HorizontalOffset>
<VerticalOffset>0</VerticalOffset>
<BackgroundColor>Transparent</BackgroundColor>
<BorderColor>Transparent</BorderColor>
<WindowState>Docked</WindowState>
<Grid>
  <Rows>7</Rows>
  <Cols>12</Cols>
</Grid>
<Content>
  <DynamicKey Row="0" Col="0">
    <Text>~</Text>
    <Label>~</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="1">
    <Text>1</Text>
    <Label>1</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="2">
    <Text>2</Text>
    <Label>2</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="3">
    <Text>3</Text>
    <Label>3</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="4">
    <Text>4</Text>
    <Label>4</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="5">
    <Text>5</Text>
    <Label>5</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="6">
    <Text>6</Text>
    <Label>6</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="7">
    <Text>7</Text>
    <Label>7</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="0">
    <Text></Text>
    <Label></Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="8">
    <Text>8</Text>
    <Label>8</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="1">
    <Text>!</Text>
    <Label>!</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="9">
    <Text>9</Text>
    <Label>9</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="2">
    <Text>?</Text>
    <Label>?</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="10">
    <Text>0</Text>
    <Label>0</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="3">
    <Text>+</Text>
    <Label>+</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="4">
    <Text>*</Text>
    <Label>*</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="11">
    <Symbol>MenuIcon</Symbol>
    <Action>MenuKeyboard</Action>
  </DynamicKey>
  <DynamicKey Row="1" Col="5">
    <Text>%</Text>
    <Label>%</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="6">
    <Text>&amp;</Text>
    <Label>&amp;</Label>
  </DynamicKey>
  <DynamicKey Row="2" Col="0">
    <Text>/</Text>
    <Label>/</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="7">
    <Text>"</Text>
    <Label>"</Label>
  </DynamicKey>
  <DynamicKey Row="2" Col="1">
    <Text>q</Text>
    <Label>q</Label>
    <ShiftDownLabel>Q</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="1" Col="8">
    <Text>'</Text>
    <Label>'</Label>
  </DynamicKey>
  <DynamicKey Row="2" Col="2">
    <Text>w</Text>
    <Label>w</Label>
    <ShiftDownLabel>W</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="1" Col="9">
    <Text>\`</Text>
    <Label>\`</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="10">
    <Text>$</Text>
    <Label>$</Label>
  </DynamicKey>
  <DynamicKey Row="2" Col="3">
    <Text>e</Text>
    <Label>e</Label>
    <ShiftDownLabel>E</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="2" Col="4">
    <Text>r</Text>
    <Label>r</Label>
    <ShiftDownLabel>R</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="2" Col="5">
    <Text>t</Text>
    <Label>t</Label>
    <ShiftDownLabel>T</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="2" Col="6">
    <Text>z</Text>
    <Label>z</Label>
    <ShiftDownLabel>Z</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="0">
    <Text>-</Text>
    <Label>-</Label>
  </DynamicKey>
  <DynamicKey Row="2" Col="7">
    <Text>u</Text>
    <Label>u</Label>
    <ShiftDownLabel>U</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="1">
    <Text>_</Text>
    <Label>_</Label>
  </DynamicKey>
  <DynamicKey Row="2" Col="8">
    <Text>i</Text>
    <Label>i</Label>
    <ShiftDownLabel>I</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="2">
    <Text>a</Text>
    <Label>a</Label>
    <ShiftDownLabel>A</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="2" Col="9">
    <Text>o</Text>
    <Label>o</Label>
    <ShiftDownLabel>O</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="2" Col="10">
    <Text>p</Text>
    <Label>p</Label>
    <ShiftDownLabel>P</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="3">
    <Text>s</Text>
    <Label>s</Label>
    <ShiftDownLabel>S</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="2" Col="11">
    <Text>|</Text>
    <Label>|</Label>
  </DynamicKey>
  <DynamicKey Row="3" Col="4">
    <Text>d</Text>
    <Label>d</Label>
    <ShiftDownLabel>D</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="5">
    <Text>f</Text>
    <Label>f</Label>
    <ShiftDownLabel>F</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="6">
    <Text>g</Text>
    <Label>g</Label>
    <ShiftDownLabel>G</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="7">
    <Text>h</Text>
    <Label>h</Label>
    <ShiftDownLabel>H</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="0">
    <Symbol>TabIcon</Symbol>
    <Text>&#9;</Text>
  </DynamicKey>
  <DynamicKey Row="3" Col="8">
    <Text>j</Text>
    <Label>j</Label>
    <ShiftDownLabel>J</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="1">
    <Text>&lt;</Text>
    <Label>&lt;</Label>
  </DynamicKey>
  <DynamicKey Row="3" Col="9">
    <Text>k</Text>
    <Label>k</Label>
    <ShiftDownLabel>K</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="2">
    <Text>y</Text>
    <Label>y</Label>
    <ShiftDownLabel>Y</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="10">
    <Text>l</Text>
    <Label>l</Label>
    <ShiftDownLabel>L</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="3">
    <Text>x</Text>
    <Label>x</Label>
    <ShiftDownLabel>X</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="11">
    <Text>^</Text>
    <Label>^</Label>
  </DynamicKey>
  <DynamicKey Row="4" Col="4">
    <Text>c</Text>
    <Label>c</Label>
    <ShiftDownLabel>C</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="5">
    <Text>v</Text>
    <Label>v</Label>
    <ShiftDownLabel>V</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="6">
    <Text>b</Text>
    <Label>b</Label>
    <ShiftDownLabel>B</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="7">
    <Text>n</Text>
    <Label>n</Label>
    <ShiftDownLabel>N</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="5" Col="0">
    <Label>Win</Label>
    <Action>LeftWin</Action>
  </DynamicKey>
  <DynamicKey Row="4" Col="8">
    <Text>m</Text>
    <Label>m</Label>
    <ShiftDownLabel>M</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="5" Col="1">
    <Text>&gt;</Text>
    <Label>&gt;</Label>
  </DynamicKey>
  <DynamicKey Row="4" Col="9">
    <Text>@</Text>
    <Label>@</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="2">
    <Text>,</Text>
    <Label>,</Label>
  </DynamicKey>
  <DynamicKey Row="4" Col="10">
    <Text>=</Text>
    <Label>=</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="3">
    <Text>.</Text>
    <Label>.</Label>
  </DynamicKey>
  <DynamicKey Row="4" Col="11">
    <Text>#</Text>
    <Label>#</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="4">
    <Text>(</Text>
    <Label>(</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="5">
    <Text>)</Text>
    <Label>)</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="6">
    <Text>[</Text>
    <Label>[</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="7">
    <Text>]</Text>
    <Label>]</Label>
  </DynamicKey>
  <DynamicKey Row="6" Col="0">
    <Label>Ctrl</Label>
    <Action>LeftCtrl</Action>
  </DynamicKey>
  <DynamicKey Row="5" Col="8">
    <Text>{</Text>
    <Label>{</Label>
  </DynamicKey>
  <DynamicKey Row="6" Col="1">
    <Label>Alt</Label>
    <Action>LeftAlt</Action>
  </DynamicKey>
  <DynamicKey Row="6" Col="2">
    <Text>;</Text>
    <Label>;</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="9">
    <Text>}</Text>
    <Label>}</Label>
  </DynamicKey>
  <DynamicKey Row="6" Col="3">
    <Text>:</Text>
    <Label>:</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="10">
    <Symbol>UpArrowKeyIcon</Symbol>
    <Action>ArrowUp</Action>
  </DynamicKey>
  <DynamicKey Row="5" Col="11">
    <Label>Esc</Label>
    <Action>Escape</Action>
  </DynamicKey>
  <DynamicKey Row="6" Col="4">
    <Symbol>ShiftIcon</Symbol>
    <Action>LeftShift</Action>
  </DynamicKey>
  <DynamicKey Row="6" Col="5" Width="2" Height="2">
    <Symbol>SpaceIcon</Symbol>
    <Text>&#32;</Text>
  </DynamicKey>
  <DynamicKey Row="6" Col="7">
    <Symbol>EnterIcon</Symbol>
    <Text>&#13;</Text>
  </DynamicKey>
  <DynamicKey Row="6" Col="8">
    <Symbol>BackOneIcon</Symbol>
    <Action>BackOne</Action>
  </DynamicKey>
  <DynamicKey Row="6" Col="9">
    <Symbol>LeftArrowKeyIcon</Symbol>
    <Action>ArrowLeft</Action>
  </DynamicKey>
  <DynamicKey Row="6" Col="10">
    <Symbol>DownArrowKeyIcon</Symbol>
    <Action>ArrowDown</Action>
  </DynamicKey>
  <DynamicKey Row="6" Col="11">
    <Symbol>RightArrowKeyIcon</Symbol>
    <Action>ArrowRight</Action>
  </DynamicKey>
</Content>
</Keyboard>
`;

const exampleKeyGroupOverrideXml = `<Keyboard>
<Name>OptiKey-BoardMaker</Name>
<Height>40%</Height>
<SymbolMargin>1</SymbolMargin>
<BorderThickness>0,0,0,0</BorderThickness>
<DockSize>Full</DockSize>
<Position>Top</Position>
<Width>100%</Width>
<HorizontalOffset>0</HorizontalOffset>
<VerticalOffset>0</VerticalOffset>
<BackgroundColor>Transparent</BackgroundColor>
<BorderColor>Transparent</BorderColor>
<WindowState>Docked</WindowState>
<Grid>
  <Rows>7</Rows>
  <Cols>12</Cols>
</Grid>
<KeyGroup Name="Blue Keys" BackgroundColor="Blue" />
<KeyGroup Name="Red Keys" BackgroundColor="Red" />
<Content>
  <DynamicKey Row="0" Col="0">
    <Text>~</Text>
    <Label>~</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="1">
    <Text>1</Text>
    <Label>1</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="2">
    <Text>2</Text>
    <Label>2</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="3">
    <Text>3</Text>
    <Label>3</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="4">
    <Text>4</Text>
    <Label>4</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="5">
    <Text>5</Text>
    <Label>5</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="6">
    <Text>6</Text>
    <Label>6</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="7">
    <Text>7</Text>
    <Label>7</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="0">
    <Text></Text>
    <Label></Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="8">
    <Text>8</Text>
    <Label>8</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="1">
    <Text>!</Text>
    <Label>!</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="9">
    <Text>9</Text>
    <Label>9</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="2">
    <Text>?</Text>
    <Label>?</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="10">
    <Text>0</Text>
    <Label>0</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="3">
    <Text>+</Text>
    <Label>+</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="4">
    <Text>*</Text>
    <Label>*</Label>
  </DynamicKey>
  <DynamicKey Row="0" Col="11">
    <Symbol>MenuIcon</Symbol>
    <Action>MenuKeyboard</Action>
  </DynamicKey>
  <DynamicKey Row="1" Col="5">
    <Text>%</Text>
    <Label>%</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="6">
    <Text>&amp;</Text>
    <Label>&amp;</Label>
  </DynamicKey>
  <DynamicKey Row="2" Col="0">
    <Text>/</Text>
    <Label>/</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="7">
    <Text>"</Text>
    <Label>"</Label>
  </DynamicKey>
  <DynamicKey Row="2" Col="1">
    <Text>q</Text>
    <Label>q</Label>
    <ShiftDownLabel>Q</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="1" Col="8">
    <Text>'</Text>
    <Label>'</Label>
  </DynamicKey>
  <DynamicKey Row="2" Col="2">
    <Text>w</Text>
    <Label>w</Label>
    <ShiftDownLabel>W</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="1" Col="9">
    <Text>\`</Text>
    <Label>\`</Label>
  </DynamicKey>
  <DynamicKey Row="1" Col="10">
    <Text>$</Text>
    <Label>$</Label>
  </DynamicKey>
  <DynamicKey Row="2" Col="3">
    <Text>e</Text>
    <Label>e</Label>
    <ShiftDownLabel>E</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="2" Col="4">
    <Text>r</Text>
    <Label>r</Label>
    <ShiftDownLabel>R</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="2" Col="5">
    <Text>t</Text>
    <Label>t</Label>
    <ShiftDownLabel>T</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="2" Col="6">
    <Text>z</Text>
    <Label>z</Label>
    <ShiftDownLabel>Z</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="0">
    <Text>-</Text>
    <Label>-</Label>
  </DynamicKey>
  <DynamicKey Row="2" Col="7">
    <Text>u</Text>
    <Label>u</Label>
    <ShiftDownLabel>U</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="1">
    <Text>_</Text>
    <Label>_</Label>
  </DynamicKey>
  <DynamicKey Row="2" Col="8">
    <Text>i</Text>
    <Label>i</Label>
    <ShiftDownLabel>I</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="2">
    <Text>a</Text>
    <Label>a</Label>
    <ShiftDownLabel>A</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="2" Col="9">
    <Text>o</Text>
    <Label>o</Label>
    <ShiftDownLabel>O</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="2" Col="10">
    <Text>p</Text>
    <Label>p</Label>
    <ShiftDownLabel>P</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="3">
    <Text>s</Text>
    <Label>s</Label>
    <ShiftDownLabel>S</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="2" Col="11">
    <Text>|</Text>
    <Label>|</Label>
  </DynamicKey>
  <DynamicKey Row="3" Col="4">
    <Text>d</Text>
    <Label>d</Label>
    <ShiftDownLabel>D</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="5">
    <Text>f</Text>
    <Label>f</Label>
    <ShiftDownLabel>F</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="6">
    <Text>g</Text>
    <Label>g</Label>
    <ShiftDownLabel>G</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="7">
    <Text>h</Text>
    <Label>h</Label>
    <ShiftDownLabel>H</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="0">
    <Symbol>TabIcon</Symbol>
    <Text>&#9;</Text>
  </DynamicKey>
  <DynamicKey Row="3" Col="8">
    <Text>j</Text>
    <Label>j</Label>
    <ShiftDownLabel>J</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="1">
    <Text>&lt;</Text>
    <Label>&lt;</Label>
  </DynamicKey>
  <DynamicKey Row="3" Col="9">
    <Text>k</Text>
    <Label>k</Label>
    <ShiftDownLabel>K</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="2">
    <Text>y</Text>
    <Label>y</Label>
    <ShiftDownLabel>Y</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="10">
    <Text>l</Text>
    <Label>l</Label>
    <ShiftDownLabel>L</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="3">
    <Text>x</Text>
    <Label>x</Label>
    <ShiftDownLabel>X</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="3" Col="11">
    <Text>^</Text>
    <Label>^</Label>
  </DynamicKey>
  <DynamicKey Row="4" Col="4">
    <Text>c</Text>
    <Label>c</Label>
    <ShiftDownLabel>C</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="5">
    <Text>v</Text>
    <Label>v</Label>
    <ShiftDownLabel>V</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="6">
    <Text>b</Text>
    <Label>b</Label>
    <ShiftDownLabel>B</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="4" Col="7">
    <Text>n</Text>
    <Label>n</Label>
    <ShiftDownLabel>N</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="5" Col="0">
    <Label>Win</Label>
    <Action>LeftWin</Action>
  </DynamicKey>
  <DynamicKey Row="4" Col="8">
    <Text>m</Text>
    <Label>m</Label>
    <ShiftDownLabel>M</ShiftDownLabel>
  </DynamicKey>
  <DynamicKey Row="5" Col="1">
    <Text>&gt;</Text>
    <Label>&gt;</Label>
  </DynamicKey>
  <DynamicKey Row="4" Col="9">
    <Text>@</Text>
    <Label>@</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="2">
    <Text>,</Text>
    <Label>,</Label>
  </DynamicKey>
  <DynamicKey Row="4" Col="10">
    <Text>=</Text>
    <Label>=</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="3">
    <Text>.</Text>
    <Label>.</Label>
  </DynamicKey>
  <DynamicKey Row="4" Col="11">
    <Text>#</Text>
    <Label>#</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="4">
    <Text>(</Text>
    <Label>(</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="5">
    <Text>)</Text>
    <Label>)</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="6">
    <Text>[</Text>
    <Label>[</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="7">
    <Text>]</Text>
    <Label>]</Label>
  </DynamicKey>
  <DynamicKey Row="6" Col="0">
    <Label>Ctrl</Label>
    <Action>LeftCtrl</Action>
  </DynamicKey>
  <DynamicKey Row="5" Col="8">
    <Text>{</Text>
    <Label>{</Label>
  </DynamicKey>
  <DynamicKey Row="6" Col="1">
    <Label>Alt</Label>
    <Action>LeftAlt</Action>
  </DynamicKey>
  <DynamicKey Row="6" Col="2">
    <Text>;</Text>
    <Label>;</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="9">
    <Text>}</Text>
    <Label>}</Label>
  </DynamicKey>
  <DynamicKey Row="6" Col="3">
    <Text>:</Text>
    <Label>:</Label>
  </DynamicKey>
  <DynamicKey Row="5" Col="10">
    <Symbol>UpArrowKeyIcon</Symbol>
    <Action>ArrowUp</Action>
  </DynamicKey>
  <DynamicKey Row="5" Col="11">
    <Label>Esc</Label>
    <Action>Escape</Action>
  </DynamicKey>
  <DynamicKey Row="6" Col="4">
    <Symbol>ShiftIcon</Symbol>
    <Action>LeftShift</Action>
  </DynamicKey>
  <DynamicKey Row="6" Col="5" Width="2" Height="2">
    <Symbol>SpaceIcon</Symbol>
    <Text>&#32;</Text>
  </DynamicKey>
  <DynamicKey Row="6" Col="7">
    <Symbol>EnterIcon</Symbol>
    <Text>&#13;</Text>
  </DynamicKey>
  <DynamicKey Row="6" Col="8">
    <Symbol>BackOneIcon</Symbol>
    <Action>BackOne</Action>
    <Text>Multi</Text>
    <Action>BackOne</Action>
  </DynamicKey>
  <DynamicKey Row="6" Col="9">
    <Label>A burst with text</Label>
    <Loop Count="3">
      <KeyDown>a</KeyDown>
      <Wait>100</Wait>
      <KeyUp>a</KeyUp>
    </Loop>
    <Text>b</Text>
    <KeyGroup Name="Blue Keys" />
  </DynamicKey>
  <DynamicKey Row="6" Col="10">
    <Label>BackWithReturnFalse</Label>
    <ChangeKeyboard BackReturnsHere="false">HackerKeyboardSymbols2</ChangeKeyboard>
    <KeyGroup Name="Red Keys" />
  </DynamicKey>
  <DynamicKey Row="6" Col="11" Width="1" Height="1" BackgroundColor="Blue" ForegroundColor="Blue" KeyDisabledBackgroud="Blue" KeyDisabledForeground="Blue"
  KeyDisabledOpacity="1" KeyDownBackground="Blue" KeyDownForeground="Blue" KeyDownOpacity="1" Opacity="1" UsePersianCompatibilityFont="true"
  UseUnicodeCompatibilityFont="true" UseUrduCompatibilityFont="true" SharedSizeGroup="true" AutoScaleToOneKeyHeight="true" AutoScaleToOneKeyWidth="true" LockOnTime="500" CompletionTimes="500,500,500">
    <Label>BackWithReturnTrue</Label>
    <ChangeKeyboard BackReturnsHere="true">HackerKeyboardSymbols2</ChangeKeyboard>
    <KeyGroup Name="Blue Keys" />
    <KeyGroup Name="Red Keys" />
  </DynamicKey>
</Content>
</Keyboard>`

export default exampleXml
export {
  exampleKeyGroupOverrideXml
}