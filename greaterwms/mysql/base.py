from django.contrib.gis.db.backends.mysql.base import DatabaseWrapper
from django.contrib.gis.db.backends.mysql.features import DatabaseFeatures
from django.contrib.gis.db.backends.mysql.introspection import MySQLIntrospection
from django.contrib.gis.db.backends.mysql.operations import MySQLOperations
from django.contrib.gis.db.backends.mysql.schema import MySQLGISSchemaEditor
from django.db.backends.mysql.base import CursorWrapper
from django_prometheus.db.common import DatabaseWrapperMixin, ExportingCursorWrapper
from django.contrib.gis.db.backends.base.features import BaseSpatialFeatures


class DatabaseWrapper(DatabaseWrapperMixin, DatabaseWrapper):
    SchemaEditorClass = MySQLGISSchemaEditor
    # Classes instantiated in __init__().
    features_class = DatabaseFeatures
    introspection_class = MySQLIntrospection
    ops_class = MySQLOperations
    CURSOR_CLASS = CursorWrapper

    def create_cursor(self, name=None):
        cursor = self.connection.cursor()
        CursorWrapper = ExportingCursorWrapper(self.CURSOR_CLASS, self.alias, self.vendor)
        return CursorWrapper(cursor)