
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static



from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
      title="Dummy API",
      default_version='v1',
      description="Dummy description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@dummy.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('housedata/', include('checkboxpost.urls')),
    path('request/', include('sendrequest.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('token/', include('login.urls')),
    path('login/', include('logininfo.urls')),
    path('contactUs/', include('contactUs.urls')),

     path('playground/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   path('docs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)