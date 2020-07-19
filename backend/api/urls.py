from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_extensions.routers import NestedRouterMixin
from . import views
from rest_framework_jwt.views import obtain_jwt_token

class NestedDefaultRouter(NestedRouterMixin, DefaultRouter):
    pass


router = NestedDefaultRouter()
messages_router = router.register(r'messages', views.MessageViewSet)
messages_router.register(r'replies', views.ReplyViewSet, basename='message-replies', parents_query_lookups=['message'])


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('token-auth/', obtain_jwt_token),
    path('current_user/', views.current_user),
    path('users/', views.UserList.as_view())
    
]