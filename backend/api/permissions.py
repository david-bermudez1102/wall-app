from rest_framework import permissions

class OwnProfilePermission(permissions.BasePermission):
    """
    Object-level permission to only allow updating his own profile
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # obj here is a UserProfile instance
        return obj.user == request.user

    def has_permission(self, request, view):
        # allow all GET requests
        if request.method == 'GET':
            return True

        return request.user and request.user.is_authenticated

class CustomUsersPermissions(permissions.BasePermission):
    """
    Object-level permission to only allow updating his own profile
    """
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
            
        return obj.user == request.user

    def has_permission(self, request, view):
        # allow all POST requests
        if request.method == 'POST':
            return True

        return request.user and request.user.is_authenticated