# B2aTableModule

## Usage

### Template

```html
<b2a-table>
    <!-- HEADER -->
    <b2a-table-header>
        <b2a-table-cell width="150px">DEVELOPER</b2a-table-cell>
        <b2a-table-cell width="120px">EPIC</b2a-table-cell>
        <b2a-table-cell>STATUS</b2a-table-cell>
        <b2a-table-cell-expand></b2a-table-cell-expand>
    </b2a-table-header>
    <!-- BODY -->
    <!-- [1] -->
    <b2a-table-row>
        <b2a-table-cell width="150px">John Doe</b2a-table-cell>
        <b2a-table-cell width="120px">B2A-1111</b2a-table-cell>
        <b2a-table-cell>IN PROGRESS</b2a-table-cell>
        <b2a-table-cell-expand>
            <span class="material-icons">keyboard_arrow_down</span>
        </b2a-table-cell-expand>
        <!-- NESTED table -->
        <b2a-table>
            <b2a-table-header>
                <b2a-table-cell width="130px">TASK</b2a-table-cell>
                <b2a-table-cell width="120px">FEATURE</b2a-table-cell>
                <b2a-table-cell>STATUS</b2a-table-cell>
            </b2a-table-header>
            <!-- [1.1] -->
            <b2a-table-row>
                <b2a-table-cell width="130px">Table</b2a-table-cell>
                <b2a-table-cell width="120px">B2A-1112</b2a-table-cell>
                <b2a-table-cell>REVIEW</b2a-table-cell>
            </b2a-table-row>
            <!-- [1.2] -->
            <b2a-table-row>
                <b2a-table-cell width="130px">Filters</b2a-table-cell>
                <b2a-table-cell width="120px">B2A-1113</b2a-table-cell>
                <b2a-table-cell>REVIEW</b2a-table-cell>
            </b2a-table-row>
            <!-- [1.3] -->
            <b2a-table-row>
                <b2a-table-cell width="130px">Styling</b2a-table-cell>
                <b2a-table-cell width="120px">B2A-1114</b2a-table-cell>
                <b2a-table-cell>IN PROGRESS</b2a-table-cell>
            </b2a-table-row>
        </b2a-table>
    </b2a-table-row>
    <!-- [2] -->
    <b2a-table-row>
        <b2a-table-cell width="150px">Oto Dockal</b2a-table-cell>
        <b2a-table-cell width="120px">B2A-2222</b2a-table-cell>
        <b2a-table-cell>TODO</b2a-table-cell>
        <b2a-table-cell-expand>
            <span class="material-icons">keyboard_arrow_down</span>
        </b2a-table-cell-expand>
        <!-- NESTED table -->
        <b2a-table>
            <b2a-table-header>
                <b2a-table-cell width="130px">TASK</b2a-table-cell>
                <b2a-table-cell width="120px">FEATURE</b2a-table-cell>
                <b2a-table-cell>STATUS</b2a-table-cell>
            </b2a-table-header>
            <!-- [2.1] -->
            <b2a-table-row>
                <b2a-table-cell width="130px">Table</b2a-table-cell>
                <b2a-table-cell width="120px">B2A-2223</b2a-table-cell>
                <b2a-table-cell>TODO</b2a-table-cell>
            </b2a-table-row>
        </b2a-table>
    </b2a-table-row>
</b2a-table>
```
