{{--Books--}}
<li class="nav-item">
    <a href="{{route('book.index')}}" class="nav-link {{ in_array(Route::currentRouteName(), ['book.index']) ? 'active' : '' }}"><i class="icon-books"></i> Books</a>
</li>
